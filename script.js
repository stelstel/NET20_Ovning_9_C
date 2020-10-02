/*
ul -> 
      li ->
            p
            img
*/

let tasks = []; // Array of objects: taskObject = { text: inputTaskTxt, bought: false };

// Add task to unordered list ***********************************************************
function addTaskToUList(tasks) {
    let ul = document.getElementById("taskList");
    ul.innerHTML = ""; // Empty the ul
    let counter = 0;
    const listIdPrefix = "li-";

    tasks.forEach((task) => {
        // Create li
        let li = document.createElement("li");

        // Create p
        let liParagraph = document.createElement("p");

        // Put text from array in p
        liParagraph.innerHTML = task.text;

        // Put p in li
        li.appendChild(liParagraph);

        // Give li an id
        li.id = listIdPrefix + counter;

        // Create image
        let imgTrash = document.createElement("img");
        imgTrash.src = "images/trash.png";

        // Add event listener to image
        imgTrash.addEventListener("click", deleteItem);

        // Put image in li
        li.appendChild(imgTrash);

        if (task.bought == true) {
            liParagraph.classList.add("bought");
        } else {
            if (liParagraph.classList.contains("bought")) {
                liParagraph.classList.remove("bought");
            }
        }

        // Put li in ul
        ul.appendChild(li);

        // Add event listener to p
        let PText = document.querySelector("li#" + listIdPrefix + counter + " p");
        PText.addEventListener("click", onListItemTextClick);

        counter++;
    });
}

// User clicked button. Get input from HTML text box *******************************
function getInput() {
    let inputTaskTxt = document.getElementById("task").value;

    //Reset HTML text box
    document.getElementById("task").value = "";

    if (validateInput(inputTaskTxt)) {
        let taskObject = {
            text: inputTaskTxt,
            bought: false,
        };

        tasks.push(taskObject);
        addTaskToUList(tasks);
    }
}

// User clicked on list item text, toggle bought ****************************
function onListItemTextClick() {
    let listItemIndex = this.parentElement.id.substring(3);

    // Toggle bought
    if (!this.classList.contains("bought")) {
        this.classList.add("bought");
        tasks[listItemIndex].bought = true;
    } else {
        this.classList.remove("bought");
        tasks[listItemIndex].bought = false;
    }
}

// User clicked on list item image, delete item **********************************
function deleteItem() {
    this.parentElement.remove(); // Remove from DOM
    let listItemIndex = this.parentElement.id.substring(3);
    tasks.splice(listItemIndex, 1);
}

function validateInput(input) {
    let minInputLength = 2;
    let maxInputLength = 100;
    let msgWarning = "Längden på texten måste vara mellan ";

    if (input.length >= minInputLength && input.length <= maxInputLength) {
        // Hide warning
        document.querySelector(".alert.alert-warning").style.padding = "0";
        document.querySelector(".alert.alert-warning").style.visibility = "hidden";

        return true;
    } else {
        // Show warning
        document.querySelector(".alert.alert-warning").textContent =
            msgWarning + minInputLength + " och " + maxInputLength + "!";
        document.querySelector(".warning-row .alert.alert-warning").style.padding = "12px";
        document.querySelector(".warning-row .alert.alert-warning").style.visibility = "visible";

        return false;
    }
}

// User clicked enter key ******************************************************
document.addEventListener("keydown", function (event) {
    if (event.which === 13) {
        document.querySelector("#btnAdd").click();
    }
});

document.getElementById("btnAdd").addEventListener("click", getInput);
