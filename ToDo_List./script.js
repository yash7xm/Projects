const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


function addTodo(event){
    event.preventDefault();  // preventing form from submitting
    // create a new todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.classList.add('completed-btn');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    // to clear input value
    todoInput.value = "";
}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0] === 'trash-btn'){
        const todo=item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',() => {
            todo.remove();
        })
    }
    if(item.classList[0] === 'completed-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all" :
                todo.style.display = 'flex';
                break;
            case "completed" : 
                if(todo.classList.contains("completed"))
                    todo.style.display = 'flex';
                else 
                    todo.style.display = 'none';
                break;  
            case "uncompleted" : 
                if(!todo.classList.contains("completed"))
                    todo.style.display = 'flex';
                else 
                    todo.style.display = 'none'; 
                break;              
        }
    });
}
