// load all event

loadEventListeners();

// Event liseners

function loadEventListeners() {
  addTaskBtn.addEventListener('click', addTask);
  listGroup.addEventListener('click', removeTask);
}
