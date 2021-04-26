document.addEventListener("DOMContentLoaded",()=>{
    let alvo = document.getElementsByClassName("alvo");
    let valorDoAtivo = 100;
    for( let i = 0; i <= alvo.length; i++){
        alvo[i].addEventListener("change", ()=>{
            let lucro = alvo[i].value - valorDoAtivo;
            let lucroAlvo = document.getElementsByClassName("lucro-alvo");
            lucroAlvo[i].innerText = lucro + "%";
        });
    }

    // let alvoUm = document.getElementById('alvo-um');
    // let valorDoAtivo = 100;
    // alvoUm.addEventListener("change",()=>{
    //     let lucro = alvoUm.value - valorDoAtivo;
    //     let lucroAlvoUm = document.getElementById('lucro-alvo-um');
    //     lucroAlvoUm.innerText = lucro + '%';
    // });

});