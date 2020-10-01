let tasks = [];
//imgTrash.id;

// Add task to unordered list *********************************
function addTaskToUList(tasks) {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";

    let counter = 0;

    tasks.forEach((task) => {
        let li = document.createElement("li");

        //li.addEventListener("click", listItemClicked);

        //li.appendChild(document.createTextNode(task));

        /*
        var btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = "CLICK ME";
        */
        let liTex = document.createElement("p");
        liTex.innerHTML = task;
        li.appendChild(liTex);

        li.id = "li-" + counter;

        let liText = li.innerText;

        //let benny = document.querySelector("li#li-" + counter + " p");
        // benny.addEventListener("click", listItemClicked);
        //liText.addEventListener("click", listItemClicked);
        //console.log(liText);

        //let liTN = li.TEXT_NODE[1];
        //liTN.addEventListener("click", listItemClicked);

        let imgTrash = document.createElement("img");
        imgTrash.src = "images/trash.png";
        imgTrash.id = "image-" + counter;
        li.appendChild(imgTrash);
        ul.appendChild(li);
        let benny = document.querySelector("li#li-" + counter + " p");
        benny.addEventListener("click", listItemClicked);
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
