document.addEventListener("DOMContentLoaded",()=> {
    document.addEventListener("keyup",()=>{
        let pesquisaAtivo = document.getElementById("pesquisa-ativo");
        let filtro = pesquisaAtivo.value.toUpperCase();
        let listaDeAtivos = document.getElementById('lista-de-ativos')
        let li = listaDeAtivos.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName("a")[0];
            let txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        if(pesquisaAtivo.value!= "") listaDeAtivos.style.display = "";
        else listaDeAtivos.style.display = "none";
    })
})