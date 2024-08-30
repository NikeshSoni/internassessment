
function addTodo() {
    const InputData = document.getElementById('todo-input');
    const TextData = InputData.value.trim();

    if (TextData !== '') {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            ${TextData}
            <button class="delete-btn">X</button>
        `;

        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        listItem.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            listItem.remove();
        });

        todoList.appendChild(listItem);
        InputData.value = '';
    }
}
