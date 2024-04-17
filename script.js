const createTaskButton = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const removeSelectedTaskButton = document.querySelector('#remover-selecionado');
const removeAllTasksButton = document.querySelector('#apaga-tudo');
const removeCompletedTasksButton = document.querySelector('#remover-finalizados');

const addTask = () => {
  const taskList = document.querySelector('#lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = input.value;
  taskList.appendChild(newTask);
  input.value = '';
};

const selectedTask = (event) => {
  // Remove a classe 'selected' de todos os itens da lista
  document.querySelectorAll('li').forEach((task) => task.classList.remove('selected'));

  // Adiciona a classe 'selected' apenas ao item clicado
  event.target.classList.add('selected');
};

const completedTask = (event) => {
  const clickedTask = event.target;

  // Verifica se o elemento clicado já possui a classe 'completed' e alterna entre adicionar e remover
  clickedTask.classList.toggle('completed');
};

// aproveitar essa logica para remover a tarefa selecionada

const removeSelectedTask = () => {
  const allTasks = document.querySelectorAll('li');
  allTasks.forEach((task) => {
    if (task.classList.contains('selected')) {
      task.remove();
    }
  });
};

const removeAllTasks = () => {
  const allTasks = document.querySelectorAll('li');
  allTasks.forEach((task) => task.remove());
};

const removeCompletedTasks = () => {
  const allTasks = document.querySelectorAll('li');
  allTasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      task.remove();
    }
  });
};

createTaskButton.addEventListener('click', addTask);
list.addEventListener('click', selectedTask);
removeSelectedTaskButton.addEventListener('click', removeSelectedTask);
list.addEventListener('dblclick', completedTask);
removeAllTasksButton.addEventListener('click', removeAllTasks);
removeCompletedTasksButton.addEventListener('click', removeCompletedTasks);
