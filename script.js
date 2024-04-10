const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');

const addTask = () => {
  button.addEventListener('click', () => {
    const taskList = document.querySelector('#lista-tarefas');
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    taskList.appendChild(newTask);
  });
};

button.addEventListener('click', addTask);
