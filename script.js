document.documentElement.lang = "en";

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
let head = document.querySelector('head')
head.appendChild(metaUtf8);


let title = document.createElement('title');
title.innerHTML = 'Todo List';
document.head.appendChild(title);


function todoList() {
    let List = document.querySelector('.list');
    let newText = document.querySelector('.newtext');
    let addBtn = document.querySelector('.addbtn');
    let taskList = document.querySelector('.tasklist');
    let clear = document.querySelector('.clear');
  
    let tasks = [];
  
    function renderTasks() {
      taskList.innerHTML = '';
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        let label = document.createElement('label');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
  
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function () {
            task.completed = checkbox.checked;
            if (task.completed) {
              label.classList.add('completed');
              label.style.textDecoration = 'line-through';
            } else {
              label.classList.remove('completed');
              label.style.textDecoration = 'none';
            }
        });

        //let taskInput = document.getElementById('taskInput');
        //taskInput.addEventListener('keydown', function(event) {
        //    if (event.key === 'Enter') {
        //      let task = taskInput.value;
        //      console.log(event.key);
        //      taskInput.value = '';
        //    }
        //});
  
        label.textContent = task.text;
  
        editBtn.textContent = 'Редактировать';
        editBtn.addEventListener('click', function () {
          const newText = prompt('Введите новый текст задачи', task.text);
          if (newText !== null) {
            task.text = newText;
            label.textContent = task.text;
          }
        });
  
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', function () {
          tasks.splice(i, 1);
          renderTasks();
        });
  
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
      }
    }
  
    addBtn.addEventListener('click', function () {
      let text = newText.value.trim();
      if (text !== '') {
        tasks.push({ text: text, completed: false });
        newText.value = '';
        renderTasks();
      }
    });
  
    clear.addEventListener('click', function () {
      tasks = [];
      renderTasks();
    });
  
    renderTasks();
}


document.addEventListener('DOMContentLoaded', function () {
    todoList();
});