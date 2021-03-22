function load(){
    alert("Página carregada!");
};

function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";    
};

function redirecionar(){
    window.open("https://globallabs.academy/"); /*abre link em nova aba*/
    window.location.href = "https://globallabs.academy/"; /*abre link na mesma página*/
};

function trocar(){
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse.";
};

function voltar(){
    document.getElementById("mouse").innerHTML = "Passe o mouse aqui";
}

function trocar1(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse.";
};

function voltar1(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
};

function change(elemento){
    console.log(elemento.value);
}