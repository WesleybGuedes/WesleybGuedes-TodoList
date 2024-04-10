const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');

const addTask = () => {
  const taskList = document.querySelector('#lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = input.value;
  taskList.appendChild(newTask);
  input.value = '';
};

const changeTaskColor = (event) => {
  // Garante que nao tera a classe 'selected' em todos os itens da lista
  const allTasks = document.querySelectorAll('li');
  allTasks.forEach((task) => {
    task.classList.remove('selected');
  });

  // Adiciona a classe 'selected' ao item clicado
  const clickedTask = event.target;
  clickedTask.classList.add('selected');

  // Define a cor de fundo do item clicado para cinza
  clickedTask.style.backgroundColor = 'gray';
};

button.addEventListener('click', addTask);
list.addEventListener('click', changeTaskColor);
