var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadradosMarcados = [];
var indQuadradosMarcados = 0;

mudarJogador('J');

function escolherQuadrado(id) {
    if (vencedor !== null) return;

    var quadrado = document.getElementById(id);
    
    if (quadrado.innerHTML !== '-') return;
    
    quadrado.innerHTML = jogador;

    if (jogador === 'J') {
        quadrado.style.color = 'dodgerblue';
        quadrado.style.background = 'dodgerblue';
        checaVencedor();
        jogador = 'M';
    } 
    else {
        quadrado.style.color = 'indianred';
        quadrado.style.background = 'indianred';
        checaVencedor();
        jogador = 'J';
    }

    quadradosMarcados[indQuadradosMarcados] = quadrado.id;
    indQuadradosMarcados++;

    mudarJogador(jogador, quadradosMarcados);
}

function mudarJogador(jogadorAtual, quadradosMarcados) {
    jogador = jogadorAtual;
    if(jogador == "J"){
        jogadorSelecionado.innerHTML = "VOCÊ";
        jogadorSelecionado.style.color = "dodgerblue";
    }   

    else if(jogador == "M" && quadradosMarcados.length < 9) {
        // Temporizador
        setTimeout( function() {
            jogadorSelecionado.innerHTML = "MÁQUINA";
            jogadorSelecionado.style.color = "indianred";
            var quadradoLivre = false;
            var igual = false;
            while (quadradoLivre === false){
                var nroAleatorio = Math.floor(9 * Math.random() + 1);
                var ind = 0;
                while (ind < quadradosMarcados.length){
                    if(nroAleatorio == quadradosMarcados[ind]){
                        igual = true;
                        break;
                    }
                    ind++;
                }
                if(igual === true) quadradoLivre = igual = false;
                else quadradoLivre = true;
            }
            escolherQuadrado(nroAleatorio); 
          }, 100 );
    }
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(jogador);
        return;
    }
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(jogador);
    }
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) eigual = true;
    return eigual;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = quadrado2.style.background = quadrado3.style.background = 'green';
    if (quadrado1.id == 3 && quadrado2.id == 5 && quadrado3.id == 7) {
        quadrado3.innerHTML = "W";
        quadrado1.innerHTML = "N";
    }
    else {
        quadrado1.innerHTML = "W";
        quadrado3.innerHTML = "N";
    }
    quadrado2.innerHTML = "I";
}

function mudarVencedor(jogador) {
    vencedor = jogador;
    if(vencedor == "J"){
        vencedorSelecionado.innerHTML = "VOCÊ";
        vencedorSelecionado.style.color = "dodgerblue";
    }
    else{
        vencedorSelecionado.innerHTML = "MÁQUINA";
        vencedorSelecionado.style.color = "indianred";
    }
    return;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
        quadradosMarcados = [];
        indQuadradosMarcados = 0;
    }
    mudarJogador('J');
}