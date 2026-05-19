let tasks = [];
function addTask(){
    let input = document.getElementById("taskInput");
    let value = input.value;
    if (value.trim() === "") {
        alert("Vui lòng nhập công việc!");
        return;
    }
    localStorage

    let li = document.createElement("li");
    li.innerText = value;

    li.addEventListener("click", function() {
        if (li.classList.contains("completed")) {
            li.remove();
        } else {
            li.classList.add("completed");
        }
});

    let list = document.getElementById("taskList");
    list.appendChild(li);

    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

   
}