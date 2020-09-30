let tasks = [];

// Add task to unordered list
function addTaskToUList(tasks) {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";

    tasks.forEach((task) => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li);
    });
}

// Get input from HTML text box
function getInput() {
    let inputTask = document.getElementById("task").value;
    document.getElementById("task").value = "";
    tasks.push(inputTask);
    addTaskToUList(tasks);
}

document.getElementById("btnAdd").addEventListener("click", getInput);
