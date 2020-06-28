// variables todo

let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTask');
let listGroup = document.querySelector('#todo .list-group');

// add task

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a Task!');
  } else {
    addToList();
  }

  e.preventDefault();
}

function addToList() {
  let li = document.createElement('li');
  li.classList.add(
    'list-group-item',
    'list-group-item-action',
    'd-flex',
    'justify-content-between'
  );

  li.appendChild(document.createTextNode(taskInput.value));

  listGroup.appendChild(li);

  let link = document.createElement('a');
  link.classList.add('deleteTask');
  link.innerHTML = "<i class='fas fa-times'></i>";

  li.appendChild(link);

  taskInput.value = '';
}

// delete task

function removeTask(e) {
  if (e.target.parentElement.classList.contains('deleteTask')) {
    if (confirm('are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

  e.preventDefault;
}
