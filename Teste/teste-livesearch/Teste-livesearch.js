document.addEventListener("DOMContentLoaded",()=> {
    document.addEventListener("keyup",()=>{
        let entrada = document.getElementById("entrada");
        let filtro = entrada.value.toUpperCase();
        let listaAtivos = document.getElementById('lista-ativos')
        let li = listaAtivos.getElementsByTagName('li');
        for (let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName("a")[0];
            let txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
        if(entrada.value!= "") listaAtivos.style.display = "";
        else listaAtivos.style.display = "none";
    })
})