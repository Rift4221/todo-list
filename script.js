document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                tasksList.removeChild(li);
            });

            li.appendChild(deleteButton);
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            tasksList.appendChild(li);
            newTaskInput.value = '';
        }
    }
});
