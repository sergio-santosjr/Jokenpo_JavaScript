// Selecionando os botões do HTML.
let botoes = document.querySelectorAll("#opcoes button"); /* Uso o método querySelectorAll() ele procura todos os 
elementos que correspondem ao seletor informado */

let areaResultado = document.querySelector("#resultado");

// Variável para armazenar a escolha do jogador.
let escolhaJogador = ""; 

let opcoes = ["✊", "✋", "✌️"] // opcoes disponíveis para o computador. Um array[]

// Percorrendo cada botão
botoes.forEach(function(botao) { // Uso o método forEach() para percorrer todos os elementos do array.
    // Registrando o evento de clique
    botao.addEventListener("click", function() { //Adiciona um ouvinte de evento ao botão. click.
        escolhaJogador = botao.textContent; //Armazenando a escolha do jogador após o click.


        // SORTEANDO A JOGADA DO COMPUTADOR // Math.random é um método que gera um número decimal aleátorio entre 0 e 1.
        let indice = Math.floor(Math.random() * opcoes.length);//opcoes.lenght informa a quantidade de elementos do array
                                                // Multiplicamos *opcoes.lenght pela quantidade do array 3. 
        let escolhaComputador = opcoes[indice]; //o Math.floor arredonda para baixo esse resultado para um número inteiro
        
        // Variável que armazena o resultado
        let resultado = "";

        // Verificando se houve empate.
        if(escolhaJogador === escolhaComputador) {
                resultado = "Empate! 🤝"
        }

        // Verificando se o jogador venceu
        else if(
            (escolhaJogador === "✊" && escolhaComputador === "✌️") ||
            (escolhaJogador === "✋" && escolhaComputador === "✊") ||
            (escolhaJogador === "✌️" && escolhaComputador === "✋")
        ) {
            resultado = "Você venceu! 🥳"
        } // Se não houver empate nem vitória do jogador.
        else{
            resultado = "O computador venceu! 🤖"
        }

        // Exibindo as escolhas e o resultado na página
        areaResultado.innerHTML = `<p>Você escolheu: ${escolhaJogador}</p>
        <p>Computador escolheu: ${escolhaComputador}</p>
        <h2>${resultado}</h2>`

        // Exibindo as escolhas no console
        console.log("Jogador escolheu: " + escolhaJogador);
        console.log("Computador escolheu: " + escolhaComputador);


        
    })

});                                                            