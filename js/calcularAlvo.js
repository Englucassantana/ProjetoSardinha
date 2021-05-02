//Meta: Calcular o lucro de um alvo qualquer
document.addEventListener("DOMContentLoaded",()=>{
    let valorDoAtivo=100;
    let listaDeSinais = document.getElementById("lista-de-sinais");
    listaDeSinais.addEventListener('change',()=>{
        let alvo = event.target||event.srcElement;
        if(alvo.className == 'alvo'){
            let lucro = 100*(alvo.value - valorDoAtivo)/valorDoAtivo;
            let lucroAlvo = alvo.nextElementSibling;
            lucroAlvo.innerText = lucro + "%";
        }
    })
});

// document.addEventListener("DOMContentLoaded",()=>{
//     let alvo = document.getElementsByClassName("alvo");
//     let valorDoAtivo = 100;
//     for( let i = 0; i < alvo.length; i++){
//         alvo[i].addEventListener("change", ()=>{
//             let lucro = alvo[i].value - valorDoAtivo;
//             let lucroAlvo = document.getElementsByClassName("lucro-alvo");
//             lucroAlvo[i].innerText = lucro + "%";
//         });
//     }
// });

// let alvoUm = document.getElementById('alvo-um');
// let valorDoAtivo = 100;
// alvoUm.addEventListener("change",()=>{
//     let lucro = alvoUm.value - valorDoAtivo;
//     let lucroAlvoUm = document.getElementById('lucro-alvo-um');
//     lucroAlvoUm.innerText = lucro + '%';
// });