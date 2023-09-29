function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.innerText = taskText;
    li.onclick = function() {
        li.classList.toggle("completed");
    };
    return li;
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

document.getElementById("task-input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
