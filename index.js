let arr = [];

var inpat = document.getElementById("value.id");

document.getElementById("addBtn").addEventListener("click", () => {
  let inputValue = document.getElementById("taskInput").value;
  const newTask = {
    id: new Date().getTime(),
    task: inputValue,
  };

  if (inputValue == "") {
    alert("task field is empty");
    return false;
  }

  arr.push(newTask);
  drawTaskList();
});

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;
  arr.forEach((value, ind) => {
    // creating elements
    const myLi = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");

    // adding styles
    myLi.className = "list-group-item";
    myInput.className = "form-check-input me-1";
    myLabel.className = "form-check-label";

    // adding other attributes
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", value.id);

    // Label
    myLabel.setAttribute("for", value.id);
    myLabel.textContent = value.task;

    // append childs
    myLi.append(myInput, myLabel);
    tasksList.append(myLi);
  });
};
