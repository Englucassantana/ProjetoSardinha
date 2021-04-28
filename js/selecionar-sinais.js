document.addEventListener("DOMContentLoaded",()=> {
   let listaDeAtivos = document.getElementById('lista-de-ativos');
    listaDeAtivos.addEventListener("click",(event)=>{
       let texto = event.target.innerText;
       let novoElementoLista = document.createElement('li');
       novoElementoLista.innerText = texto;
       let listaDeSinais = document.getElementById("lista-de-sinais");
       listaDeSinais.appendChild(novoElementoLista);
    })

});