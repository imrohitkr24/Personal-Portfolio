function createTask() {
    const taskInput = document.getElementById('taskInput');
    const taskStatus = document.getElementById('taskStatus');
    const taskText = taskInput.value;
    const status = taskStatus.value;

    if (taskText === '') return;

    addTaskToDOM(taskText, status);

    taskInput.value = '';
}

function addTaskToDOM(text, status) {
    const listId = status + '-list';
    const list = document.getElementById(listId);

    const card = document.createElement('div');
    card.classList.add('task-card');

    card.innerHTML = `
        <span>${text}</span>
        <button onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
    `;

    list.appendChild(card);
}
