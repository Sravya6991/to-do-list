window.addEventListener('load', () => {
    const form = document.getElementById('new-form');
    const inputItem = document.getElementById("new-input-item");
    const taskElement = document.getElementById('tasks'); 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = inputItem.value;

        const taskItemElement = document.createElement("div");
        taskItemElement.classList.add('task');

        const contentElement = document.createElement('div');
        contentElement.classList.add('content');

        taskItemElement.appendChild(contentElement);

        const inputElement = document.createElement('input');
        inputElement.classList.add('text');
        inputElement.type = 'text';
        inputElement.value = task;
        inputElement.setAttribute('readonly', 'readonly');

        contentElement.appendChild(inputElement);

        const actionElement = document.createElement("div");
        actionElement.classList.add('actions');

        const editElement = document.createElement('button');
        editElement.classList.add('edit');
        editElement.innerText = 'Edit';

        const deleteElement = document.createElement('button');
        deleteElement.classList.add('delete');
        deleteElement.innerText = 'Delete';

        actionElement.appendChild(editElement);
        actionElement.appendChild(deleteElement);

        taskItemElement.appendChild(actionElement);

        taskElement.appendChild(taskItemElement);

        inputItem.value = '';

        editElement.addEventListener('click', (e) => {
            if ( editElement.innerText.toLowerCase() == "edit" ) {
                editElement.innerText = 'Save';
                inputElement.removeAttribute("readonly");
                inputElement.focus();
            } else {
                editElement.innerText = "Edit";
                inputElement.setAttribute("readonly", "readonly");
            }
        });

        deleteElement.addEventListener('click', (e) => {
           taskElement.removeChild(taskItemElement);
        });

    });
});

