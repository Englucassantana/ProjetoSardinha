//Somente para um especifico botão do  formulário
// document.addEventListener("DOMContentLoaded",()=>{
//    let openButtonForm = document.getElementById("open-button-form");
//    openButtonForm.addEventListener("click",()=>{
//         let signalConfigurationPanel = document.getElementById("signal-configuration-panel");
//         signalConfigurationPanel.style.display = "block";
//    });
// });

//Meta: Mostrar formulário para geração de sinais
document.addEventListener("DOMContentLoaded",()=>{
    let openButtonForm = document.getElementsByClassName("open-button-form");
    let listaDeSinais = document.getElementById('lista-de-sinais');
    listaDeSinais.addEventListener('click',()=>{
        let target = event.target||event.srcElement;
        console.log(target);
        if(target.className == "open-button-form"){
            target = target.nextElementSibling;
            console.log(target);
            target.style.display = "block";
        }
    });
});