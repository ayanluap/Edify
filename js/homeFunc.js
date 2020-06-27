// variables todo

// let taskInput = document.getElementById('taskInput');
// let addTaskBtn = document.getElementById('addTask');
// let collections = document.querySelector('#task .collections');

// add task

// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('Add a Task!');
//   } else {
//     addToList();
//   }

//   e.preventDefault();
// }

// function addToList() {
//   let li = document.createElement('li');
//   li.classList.add('collectionItems');
//   li.appendChild(document.createTextNode(taskInput.value));

//   collections.appendChild(li);

//   let link = document.createElement('a');
//   link.classList.add('deleteTask');
//   link.innerHTML = "<i class='fas fa-times'></i>";

//   li.appendChild(link);

//   taskInput.value = '';
// }

// delete task

// function removeTask(e) {
//   if (e.target.parentElement.classList.contains('deleteTask')) {
//     if (confirm('are you sure?')) {
//       e.target.parentElement.parentElement.remove();
//     }
//   }

//   e.preventDefault;
// }
