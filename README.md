# To-Do List

Простое веб-приложение для управления списком задач.

## Описание

Это приложение позволяет пользователям добавлять, отмечать как выполненные и удалять задачи. Оно создано с использованием HTML, CSS и JavaScript.

## Функциональность

- **Добавление задачи**: Введите текст задачи в поле ввода и нажмите кнопку "Add Task". Новая задача появится в списке.
- **Отметка задачи как выполненной**: Кликните на текст задачи, чтобы отметить её как выполненную. Выполненные задачи будут зачёркнуты.
- **Удаление задачи**: Нажмите кнопку "Delete" рядом с задачей, чтобы удалить её из списка.

## Установка

1. Клонируйте репозиторий на свой локальный компьютер:

    ```sh
    git clone https://github.com/Rift4221/todo-list.git
    ```

2. Перейдите в директорию проекта:

    ```sh
    cd todo-list
    ```

## Использование

1. Откройте файл `index.html` в вашем браузере.

    Вы можете сделать это, просто дважды кликнув на файл `index.html` в файловом менеджере, или открыть его через контекстное меню, выбрав "Открыть с помощью" и затем ваш браузер.

## Структура проекта

- `index.html`: Основная HTML страница.
- `style.css`: Файл стилей для оформления приложения.
- `script.js`: JavaScript файл, содержащий логику приложения.

## Пример кода

**HTML (index.html):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="new-task" placeholder="Add a new task...">
        <button id="add-task-button">Add Task</button>
        <ul id="tasks-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**CSS (style.css):**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-top: 0;
}

input, button {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    text-decoration: line-through;
    color: #999;
}

li button {
    background-color: #dc3545;
    border: none;
}

li button:hover {
    background-color: #c82333;
}
```

**JavaScript (script.js):**

```js
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
```
