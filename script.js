const botoes = document.querySelectorAll("button");
    botoes.forEach(function(botao){
       botao.addEvenListener("click", botaoClicado);

    function botaoClicado () {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        texto.textContent++;
    }
    });