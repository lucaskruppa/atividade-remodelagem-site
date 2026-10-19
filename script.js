// Funções de acessibilidade

const ZOOM_MIN = 50;       
const ZOOM_MAX = 150;      
const ZOOM_PASSO = 10;     
const LARGURA_BASE = 800;  

let tamanhoFonte = 100;
const main = document.querySelector("main");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");

function aplicarZoom() {
    document.body.style.fontSize = tamanhoFonte + "%";
    main.style.maxWidth = (LARGURA_BASE * tamanhoFonte / 100) + "px";

    // Desativa o botão quando o limite é atingido
    btnAumentar.disabled = tamanhoFonte >= ZOOM_MAX;
    btnDiminuir.disabled = tamanhoFonte <= ZOOM_MIN;
}

function aumentarFonte() {
    if (tamanhoFonte < ZOOM_MAX) {
        tamanhoFonte += ZOOM_PASSO;
        aplicarZoom();
    }
}

function diminuirFonte() {
    if (tamanhoFonte > ZOOM_MIN) {
        tamanhoFonte -= ZOOM_PASSO;
        aplicarZoom();
    }
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}