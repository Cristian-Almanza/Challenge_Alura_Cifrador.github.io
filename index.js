let textoCaja = document.getElementById("textoEntrada");
let mensajeCaja = document.getElementById("mensaje");
let pattern = new RegExp(/[A-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+/);
let btnCopiar = document.getElementById("btn-copiar");
/* Funcion que valida la entrada correcta del mensaje */
const validarEntrada = (texto) =>{
    if(!pattern.test(texto) && texto.length !=0){
        return true;
    }
    else{
        return false;
    }
}
/* Funcion para cifrar el texto */
const encriptar = (texto) =>{
    let mensajeEncriptado = texto.replace(/e/img, "enter");
        mensajeEncriptado = mensajeEncriptado.replace(/o/img, "ober");
        mensajeEncriptado = mensajeEncriptado.replace(/i/img, "imes");
        mensajeEncriptado = mensajeEncriptado.replace(/a/img, "ai");
        mensajeEncriptado = mensajeEncriptado.replace(/u/img, "ufat");
        mensajeCaja.style.background = "white";
        mensajeCaja.value=mensajeEncriptado;
        btnCopiar.style.display ="inline";
}
/* Funcion que ejecutal el usuario con el boton encriptar */
const botonCifrar = () =>{
    if(validarEntrada(textoCaja.value)){
        encriptar(textoCaja.value);
        textoCaja.value = "";
    }
    else{
        alert("Mensaje no permitido");
        textoCaja.value = "";
    }

}

/* Boton para copiar el texto del text-area */
const botonCopiar = () =>{
    mensajeCaja.select();
    mensajeCaja.setSelectionRange(0,999999);
    document.execCommand('copy');
    textoCaja.focus();
    mensajeCaja.value = "";
    mensajeCaja.style.backgroundImage ="url(./img/Muñeco.png)";
    mensajeCaja.style.backgroundRepeat = "no-repeat";
    mensajeCaja.placeholder ="Texto Copiado al Portapaeles"
    /* btnCopiar.style.display ="none"; */
}

/* Botones para el des encriptado */
const desencriptar = (texto) =>{
    let mensaje = texto.replace(/enter/img, "e");
    mensaje = mensaje.replace(/ober/img, "o");
    mensaje = mensaje.replace(/imes/img, "i");
    mensaje = mensaje.replace(/ai/img, "a");
    mensaje = mensaje.replace(/ufat/img, "u");
    mensajeCaja.style.background = "white";
    mensajeCaja.value = mensaje;
         
}

const botonDescifrar = () =>{
    desencriptar(textoCaja.value);
    textoCaja.value = "";

}