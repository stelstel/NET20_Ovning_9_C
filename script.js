let tasks = [];
let imgTrash = document.createElement("img");
imgTrash.src = "images/trash.png";

// Add task to unordered list *********************************
function addTaskToUList(tasks) {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";

    let counter = 0;

    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.addEventListener("click", listItemClicked);
        li.appendChild(document.createTextNode(task));
        li.id = "kurt" + counter;
        li.appendChild(imgTrash);
        ul.appendChild(li);
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

document.getElementById("btnAdd").addEventListener("click", getInput);
