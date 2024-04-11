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

const selectedTask = (event) => {
  // Seleciona todos os itens da lista a partir do momento que forem criados
  const allTasks = document.querySelectorAll('li');

  // Remove a classe 'selected' de todos os itens da lista
  allTasks.forEach((task) => {
    task.classList.remove('selected');
  });

  // Adiciona a classe 'selected' apenas ao item clicado
  const clickedTask = event.target;
  clickedTask.classList.add('selected');
};

// aproveitar essa logica para remover a tarefa selecionada

/* const removeSelectedTask = () => {
  const allTasks = document.querySelectorAll('li');
  allTasks.forEach((task) => {
    if (task.classList.contains('selected')) {
      task.remove();
    }
  });
}; */

button.addEventListener('click', addTask);
list.addEventListener('click', selectedTask);
// list.addEventListener('dblclick', removeSelectedTask);
