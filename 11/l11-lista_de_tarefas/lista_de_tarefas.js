const listaTarefa = ['fazer janta', 'lavar a louça'];

mostrarListaTarefa();

function mostrarListaTarefa() {
  let listaTarefaHTML = '';

  for (let i = 0; i < listaTarefa.length; i++) {
    const tarefa = listaTarefa[i];
    const html = `<p>${tarefa}</p>`;
    listaTarefaHTML += html;
  }
  console.log(listaTarefaHTML);

  document.querySelector('.js-lista-tarefa')
    .innerHTML = listaTarefaHTML;
}

function addTarefa() {
  const elementoInput = document.querySelector('.js-tarefa1-input');
  const nome = elementoInput.value;
 
  listaTarefa.push(nome);
  console.log(listaTarefa);

  elementoInput.value = '';

  mostrarListaTarefa();
}