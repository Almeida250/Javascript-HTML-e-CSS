//iniciar o localStorage com a listaTarefa para armazenar o conteudo
let listaTarefa = JSON.parse(localStorage.getItem("listaTarefa")) || [];

mostrarListaTarefa();

function mostrarListaTarefa() {
  let listaTarefaHTML = '';
  listaTarefa.forEach((tarefaObjeto, index) => {
      const { nome, data } = tarefaObjeto;
      const html = ` 
        <div> ${nome}</div>
        <div>${data}</div>
        <button class="deletar-botao js-deletar-botao">Deletar</button>
      `;
//     não dá para colocar o "addEventListener" nessa parte
//     do código pois ele lê primeiro o HTML e dps o JS, sendo assim,
//     para funcionar, colocar isso dentro do mostrarListaTarefa()
//     Outro problema: o QuerySelector seleciona apenas um botão, 
//     não todos os botões, então vou usar QuerySelectorAll
      listaTarefaHTML += html;
    }
  );

  document.querySelector('.js-lista-tarefa')
    .innerHTML = listaTarefaHTML;

    document.querySelectorAll('.js-deletar-botao')
  .forEach((botaoDeletar, index) => {
    botaoDeletar.addEventListener('click', () => {
      listaTarefa.splice(index, 1); 
      salvarLista();
      mostrarListaTarefa();
    });
  });
}

//a msm coisa que o "onclick" do html, mas no javascript
document.querySelector('.js-adicionar-botao')
  .addEventListener('click', () => {
    addTarefa();
  });

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
  salvarLista();
  mostrarListaTarefa();
}

//salvar a lista no localStorage
function salvarLista() {
  localStorage.setItem("listaTarefa", JSON.stringify(listaTarefa));
}