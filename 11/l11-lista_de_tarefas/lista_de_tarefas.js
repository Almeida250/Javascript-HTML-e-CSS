const listaTarefa = [
  {nome: 'Ir ao mercado',
   data: '01-01-2025' }
];

mostrarListaTarefa();

function mostrarListaTarefa() {
  let listaTarefaHTML = '';

  for (let i = 0; i < listaTarefa.length; i++) {
    const tarefaObjeto = listaTarefa[i];
    //const nome = tarefaObjeto.nome;
    //const data = tarefaObjeto.data;
    const { nome, data } = tarefaObjeto;
    const html = ` 
      <div> ${nome}</div>
      <div>${data}</div>
      <button onclick="
        listaTarefa.splice(${i}, 1); 
        mostrarListaTarefa();
      " class = "deletar-botao">Deletar</button>
    `;
    listaTarefaHTML += html;
  }

  document.querySelector('.js-lista-tarefa')
    .innerHTML = listaTarefaHTML;
}

function addTarefa() {
  const elementoInput = document.querySelector('.js-tarefa1-input');
  const nome = elementoInput.value;

  const dataInput = document.querySelector('.js-data-input');

  const data = dataInput.value
 
  listaTarefa.push({
    nome,
    data
  });
  elementoInput.value = '';

  mostrarListaTarefa();
}