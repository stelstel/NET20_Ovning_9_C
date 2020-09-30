let tasks = [];

function getInput() {
    let inputTask = document.getElementById("task").value;
    document.getElementById("task").value = "";
    tasks.push(inputTask);
    console.log("T: " + tasks);
}

document.getElementById("btnAdd").addEventListener("click", getInput);
