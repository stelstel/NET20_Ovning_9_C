/*
ul -> 
      li ->
            p
            img
*/
let tasks = [];

// Add task to unordered list *********************************
function addTaskToUList(tasks) {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";
    let counter = 0;

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
        li.id = "li-" + counter;

        // Create image
        let imgTrash = document.createElement("img");
        imgTrash.src = "images/trash.png";

        // Add event listener to image
        imgTrash.addEventListener("click", deleteItem);

        // Put image in li
        li.appendChild(imgTrash);

        if (task.bought == true) {
            li.classList.add("bought");
        } else {
        }

        // Put li in ul
        ul.appendChild(li);

        // Add event listener to p
        let liText = document.querySelector("li#li-" + counter + " p");
        liText.addEventListener("click", onListItemClick);

        counter++;
    });
    console.table(tasks); /////////////////////////
}

// Get input from HTML text box *******************************
function getInput() {
    let inputTaskTxt = document.getElementById("task").value;

    //Reset HTML text box
    document.getElementById("task").value = "";
    let taskObject = {
        text: inputTaskTxt,
        bought: false,
    };

    tasks.push(taskObject);
    addTaskToUList(tasks);
}

// User clicked on list item text, change item text look
function onListItemClick() {
    let ListItemId = this.parentElement.id;
    ListItemIndex = ListItemId.substring(3);

    if (!this.classList.contains("bought")) {
        this.classList.add("bought");
        tasks[ListItemIndex].bought = true;
    } else {
        this.classList.remove("bought");
        tasks[ListItemIndex].bought = false;
    }
}

// User clicked on list item image, delete
function deleteItem() {
    this.parentElement.remove(); // Remove from DOM
    paragraphInCaller = this.parentElement.querySelector("p").innerHTML;

    // Remove from array
    for (let i = 0; i < tasks.length; i++) {
        const paragraphInArray = tasks[i].text;

        if (paragraphInArray === paragraphInCaller) {
            tasks.splice(i, 1);
        }
    }
}

document.getElementById("btnAdd").addEventListener("click", getInput);
