document.getElementById("taskList").innerHTML = localStorage.getItem("tasks") || "";
function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;
    let li = document.createElement("li");
    li.innerHTML = input.value + ' <button onclick="this.parentElement.remove(); saveData()">[X]</button>';

    document.getElementById("taskList").appendChild(li);
    input.value = ""; 
    saveData(); 
}


function saveData() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}