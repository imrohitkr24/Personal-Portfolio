const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Load todos from local storage
document.addEventListener('DOMContentLoaded', getTodos);

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(event) {
    event.preventDefault();
    if (todoInput.value === '') return;

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = `<span>${todoInput.value}</span>`;
    todoDiv.appendChild(newTodo);

    // Save to local storage
    saveLocalTodos(todoInput.value);

    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    newTodo.appendChild(trashButton);

    // Append to list
    todoList.appendChild(newTodo);

    // Clear Input
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList.contains('trash-btn') || item.parentElement.classList.contains('trash-btn')) {
        const todo = item.closest('li');
        removeLocalTodos(todo);
        todo.remove();
    }

    // CHECK MARK
    if (item.tagName === 'SPAN') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        // Create Li
        const newTodo = document.createElement('li');
        newTodo.innerHTML = `<span>${todo}</span>`;

        // Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        newTodo.appendChild(trashButton);

        todoList.appendChild(newTodo);
    });
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
