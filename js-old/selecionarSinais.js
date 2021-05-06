let form = `
    <button class="open-button-form">Open Form</button>
    <form class="signal-configuration-panel" style="display: none">
        <input class="load-button" type = "button" value="load">
        <span> Intervalo de entrada</span>
        <label >Valor minimo de entrada</label>
        <input class="valor-minimo-entrada"type="number" name= "intervalo-de-entrada" inputmode="decimal" placeholder="Valor mínimo de entrada">
        <label >Valor máximo de entrada</label>
        <input class="valor-maximo-entrada"type="number" name= "intervalo-de-entrada" inputmode="decimal" placeholder="Valor máximo de entrada">
        <label >Alvo 1</label>
        <input class="alvo" type="number" name="alvo-um" inputmode="decimal" placeholder="Alvo 1">
        <span class="lucro-alvo">%</span>
        <label >Alvo 2</label>
        <input class="alvo" type="number" name="alvo-dois" inputmode="decimal" placeholder="Alvo 2">
        <span class="lucro-alvo">%</span>
        <label >Alvo 3</label>
        <input class="alvo" type="number" name="alvo-tres" inputmode="decimal" placeholder="Alvo 3">
        <span class="lucro-alvo">%</span>
        <label >Stop Loss</label>
        <input class="stop-loss" type="number" inputmode="decimal" placeholder="Stop loss">
        <span class="prejuizo-stop-loss">%</span>
        <input type="submit" value="Enviar para o Telegram">
    </form>
`
document.addEventListener("DOMContentLoaded",()=> {
   let selecionarSinal = document.getElementById('selecionar-sinal');
   selecionarSinal.addEventListener('click', ()=>{
      event.preventDefault();
      let myInput = document.getElementById('myInput');
      let simboloDoAtivo = myInput.value;
      let status = false;
      let erro = [];
      if(erro.length == 0){
         let novoSpan = document.createElement('span');
          novoSpan.textContent = simboloDoAtivo;
          let novoElementoLista = document.createElement('li');
          novoElementoLista.appendChild(novoSpan);
          let novoDiv = document.createElement('div')
          novoDiv.innerHTML = form;
          novoElementoLista.appendChild(novoDiv);
          let listaDeSinais = document.getElementById("lista-de-sinais");
          listaDeSinais.appendChild(novoElementoLista);

      }
   })
});

function verificarExistenciaDeAtivo(simboloDoAtivo){
   let erro;
   xhr.onload = function (){
      if(xhr.status == 200){
         let responseObject = JSON.parse(xhr.responseText);
         for (let i = 0; i < responseObject.length; i++) {
            responseObject[i].symbol
         }
      }
   }
}

// document.addEventListener("DOMContentLoaded",()=> {
//    let listaDeAtivos = document.getElementById('lista-de-ativos');
//     listaDeAtivos.addEventListener("click",(event)=>{
//        let texto = event.target.innerText;
//        let novoSpan = document.createElement('span');
//        novoSpan.textContent = texto;
//        let novoElementoLista = document.createElement('li');
//        novoElementoLista.appendChild(novoSpan);
//        let novoDiv = document.createElement('div')
//        novoDiv.innerHTML = form;
//        novoElementoLista.appendChild(novoDiv);
//        let listaDeSinais = document.getElementById("lista-de-sinais");
//        listaDeSinais.appendChild(novoElementoLista);
//     })
// });
