function saudacao() {
    alert("♣ Bem-vindo ao site dos Indigenas!! ♥");
}

function solicitarNome() {
    var nome = prompt("Qual é o nome do indigena?");
    
    if (nome != null && nome !== "") {
        alert("Olá, " + nome + "!");
    } else {
        alert("Você não inseriu seu nome de indigena.");
    }
}

function mostrarData() {
    document.getElementById("data").innerHTML = Date();
}


function mudarImagem() {
    document.getElementById("minhaImagem").src = "png/indio.jpg";
}

function restaurarImagem() {
    document.getElementById("minhaImagem").src = "png/guarani.png";  
}



function mudarImagem2() {
    document.getElementById("minhaImagem2").src = "png/ticuna.jpg";
}

function restaurarImagem2() {
    document.getElementById("minhaImagem2").src = "png/ticuna.png";  
}



function mudarImagem3() {
    document.getElementById("minhaImagem3").src = "png/ianomamis2.png";
}

function restaurarImagem3() {
    document.getElementById("minhaImagem3").src = "png/ianomami.png";  
}
