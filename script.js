var textin = document.getElementById("text-ingresa");
var textout = document.getElementById("text-sale");
var bcopia = document.getElementById("text-copia");

const texarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function encriptar(stringencriptado) {
/*let matrizcodigo =  [{"e", "enter"}, {"i", "imes"}, {"a", "ai"}, {"o", "ober"}, {"u", "ufat"}]; */   
let matrizcodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];  
stringencriptado = stringencriptado.toLowerCase()

for(var i = 0; i < matrizcodigo.length; i++){
    if(stringencriptado.includes(matrizcodigo[i][0])){
        stringencriptado = stringencriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
    }
}
return stringencriptado;
}

function desencriptar(stringdesencriptado) {
    /*let matrizcodigo =  [{"e", "enter"}, {"i", "imes"}, {"a", "ai"}, {"o", "ober"}, {"u", "ufat"}]; */   
    let matrizcodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];  
    stringdesencriptado = stringdesencriptado.toLowerCase()
    
    for(var i = 0; i < matrizcodigo.length; i++){
        if(stringdesencriptado.includes(matrizcodigo[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringdesencriptado;
    }
    
function btnencriptar(){
    const textoencriptado = encriptar(texarea.value);
    mensaje.value = textoencriptado;
    texarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btndesencriptar(){
    const textodesencriptado = desencriptar(texarea.value);
    mensaje.value = textodesencriptado;
    texarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btncopiar(){
    var textin = document.getElementById("text-sale").value;       //coger texto
    navigator.clipboard.writeText(textin);      //copiar texto 
}

