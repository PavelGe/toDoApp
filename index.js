let arr = [];

var inpat = document.getElementById("value.id");

// Adding task on click
document.getElementById("addBtn").addEventListener("click", () => {
  let inputValue = document.getElementById("taskInput").value;

  // Delete input after button click
  let formText = document.getElementById("taskInput");
  formText.value = "";

  const newTask = {
    id: new Date().getTime(),
    task: inputValue,
  };

  if (!inputValue.trim()) {
    alert("task field is empty");
    return;
  }

  arr.push(newTask);
  drawTaskList();
});

// Adding task on enter
document.getElementById("taskInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let inputValue = document.getElementById("taskInput").value;

    // Delete input after button click
    let formText = document.getElementById("taskInput");
    formText.value = "";

    const newTask = {
      id: new Date().getTime(),
      task: inputValue,
    };

    if (!inputValue.trim()) {
      alert("task field is empty");
      return;
    }

    arr.push(newTask);
    drawTaskList();
  }
});

// delete task on click
function deleteItem() {
  console.log(this.id);
  arr = arr.filter((val) => val.id !== +this.id);
  drawTaskList();
}

const drawTaskList = () => {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = null;
  arr.forEach((value, ind) => {
    // creating elements
    const myLi = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");
    const deleteButton = document.createElement("button");

    // adding styles
    myLi.className = "list-group-item";
    myInput.className = "form-check-input me-1";
    myLabel.className = "form-check-label col-9";
    deleteButton.className = "btn btn-danger btn-sm col-2";

    // adding other attributes
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", ind);

    // Label
    myLabel.setAttribute("for", ind);
    myLabel.textContent = value.task;

    // Delete button
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("id", value.id);
    deleteButton.textContent = "Done";
    deleteButton.onclick = deleteItem;

    // append childs
    myLi.append(myInput, myLabel, deleteButton);
    tasksList.append(myLi);
  });
};
