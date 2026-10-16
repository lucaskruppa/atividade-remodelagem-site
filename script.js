 // Funções de acessibilidade
let tamanhoFonte = 100;
let tamanhoMain = 800;
let main = document.querySelector("main")

function aumentarFonte() {

        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        tamanhoMain += 50;
        main.style.maxWidth = tamanhoMain + "px";

}

function diminuirFonte() {
    
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        if(tamanhoMain > 800){
            tamanhoMain -= 50;
            main.style.maxWidth = tamanhoMain + "px";
        }
        
    
}

