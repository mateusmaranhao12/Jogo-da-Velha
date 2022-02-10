//Elementos do DOM

const casas = document.getElementsByTagName('input') //pega a lista de casas do tabuleiro do jogo
const b_reiniciar = document.getElementById('reiniciar') //pega o botão de reiniciar
const label_jogador = document.getElementById('jogador') //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez

//variáveis de estado do jogo

var jogador = '_' //Define o jogador atual (_ = jogador indefinido; X = jogador X, O = jogador O)
var vencedor = '_' //Define se há um vencedor ou não (_ = indefinido; X = jogador X, O = jogador O)

sortearJogador() //Escolhe aleatoriamento o jogador inicial

//Define a resposta ao evento de clique nas casas do "tabuleiro"

for(var i=0; i<9; i++) {

    casas[i].addEventListener('click', (event) => {

        //se a casa estiver vazia e ninguém tiver vencido a partida
        if ((event.target.value == '_') && (vencedor == '_')) {

            event.target.value = jogador //preenche a casa com X ou O
            event.target.style.color = 'indigo' //torna o valor da casa visível

            trocarJogador() //troca a vez do jogador

            vencedor = vitoria() //retorna o vencedor da partida

        }

    })

}

//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click', (event) => {

    for(var i=0; i<9; i++) {

        casas[i].value = '_' //Limpar casas
        casas[i].style.color = 'violet' //Torna o valor _ invisível
        casas[i].style.backgroundColor = 'violet' //Torna o fundo da cor original

    }

    vencedor = '_' //Reseta o vencedor

    sortearJogador() //escolhe aleatoriamente qual jogador irá começar

})

//--------------Funções do jogo--------------

//Para sortear o jogador que irá começar
function sortearJogador() {
    
    if (Math.floor(Math.random() * 2) == 0) {

        jogador = "O" //Jogador O é o atual jogador
        label_jogador.innerHTML = "O"
        label_jogador.style.color = 'magenta' //Define a cor do jogador O

    } else {

        jogador = "X" //Jogador X é o atual jogador
        label_jogador.innerHTML = "X"
        label_jogador.style.color = 'white' //Define a cor do jogador X

    }

}

sortearJogador()

//Alternar a vez entre os jogadores
function trocarJogador() {

    if (jogador == 'X') {

        jogador = 'O'
        label_jogador.innerHTML = 'O'
        label_jogador.style.color='magenta'

    } else {

        jogador = 'X'
        label_jogador.innerHTML = 'X'
        label_jogador.style.color='white'

    }

}

//Jogador vencedor
function vitoria() {

    if ((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_') {

        casas[0].style.backgroundColor='#0F0'
        casas[1].style.backgroundColor='#0F0'
        casas[2].style.backgroundColor='#0F0'

        return casas[0].value

    } else if ((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value != '_') {

        casas[3].style.backgroundColor='#0F0'
        casas[4].style.backgroundColor='#0F0'
        casas[5].style.backgroundColor='#0F0'

        return casas[3].value

    } else if ((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_') {

        casas[6].style.backgroundColor='#0F0'
        casas[7].style.backgroundColor='#0F0'
        casas[8].style.backgroundColor='#0F0'

        return casas[6].value

    } else if ((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_') {

        casas[1].style.backgroundColor='#0F0'
        casas[4].style.backgroundColor='#0F0'
        casas[7].style.backgroundColor='#0F0'

        return casas[1].value

    } else if ((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_') {

        casas[0].style.backgroundColor='#0F0'
        casas[3].style.backgroundColor='#0F0'
        casas[6].style.backgroundColor='#0F0'

        return casas[0].value

    } else if ((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_') {

        casas[2].style.backgroundColor='#0F0'
        casas[5].style.backgroundColor='#0F0'
        casas[8].style.backgroundColor='#0F0'

        return casas[2].value

    } else if ((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_') {

        casas[0].style.backgroundColor='#0F0'
        casas[4].style.backgroundColor='#0F0'
        casas[8].style.backgroundColor='#0F0'

        return casas[0].value

    } else if ((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_') {

        casas[2].style.backgroundColor='#0F0'
        casas[4].style.backgroundColor='#0F0'
        casas[6].style.backgroundColor='#0F0'

        return casas[2].value

    }

    return '_'

}