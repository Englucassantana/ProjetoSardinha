document.addEventListener("DOMContentLoaded",()=>{
    let alvoUm = document.getElementById('alvo-um');
    let valorDoAtivo = 100;
    alvoUm.addEventListener("change",()=>{
        let lucro = alvoUm.value - valorDoAtivo;
        let lucroAlvoUm = document.getElementById('lucro-alvo-um');
        lucroAlvoUm.innerText = lucro + '%';
    });

});