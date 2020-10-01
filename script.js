let tasks = [];

// Add task to unordered list *********************************
function addTaskToUList(tasks) {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";

    let counter = 0;

    tasks.forEach((task) => {
        let li = document.createElement("li");

        let liParagraph = document.createElement("p");
        liParagraph.innerHTML = task;
        li.appendChild(liParagraph);

        li.id = "li-" + counter;

        let imgTrash = document.createElement("img");
        imgTrash.src = "images/trash.png";
        imgTrash.id = "image-" + counter;
        imgTrash.addEventListener("click", deleteItem);
        li.appendChild(imgTrash);
        ul.appendChild(li);
        let liText = document.querySelector("li#li-" + counter + " p");
        liText.addEventListener("click", listItemClicked);
        counter++;
    });
}

// Get input from HTML text box *******************************
function getInput() {
    let inputTask = document.getElementById("task").value;

    //Reset HTML text box
    document.getElementById("task").value = "";

    tasks.push(inputTask);
    addTaskToUList(tasks);
}

function listItemClicked() {
    if (!this.classList.contains("bought")) {
        this.classList.add("bought");
    } else {
        this.classList.remove("bought");
    }
}

function deleteItem() {
    this.parentElement.remove(); // Remove from DOM

    paragraphInCaller = this.parentElement.querySelector("p").innerHTML;

    // Remove from array
    for (let i = 0; i < tasks.length; i++) {
        const element = tasks[i];

        if (element === paragraphInCaller) {
            tasks.splice(i, 1);
        }
    }
}

document.getElementById("btnAdd").addEventListener("click", getInput);
