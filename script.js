/*Cambiar el texto del boton de nav*/
function cambiarTexto(elemento){
    if(elemento.innerHTML == "Iniciar sesión"){
        elemento.innerHTML = "Cerrar sesión";
    } else {
        elemento.innerHTML = "Iniciar sesión";
    }
}

/*Alerta para imagen del animal*/
function destino(elemento){
    if(elemento.id == "lapa"){
        alert("El destino favorito de Lapita es Guanacaste");
        console.log("Lapa");
    } 
    else if (elemento.id == "rana"){
        alert("El destino favorito de ranita es Monteverde");
        console.log("Rana");
    }
    else{
        alert("el destino favorito de tucancito es Atenas");
        console.log("Tucan");
    }
} 

/*Cambiar la imagen del banner principal*/
function cambiarImagen(elemento){
    elemento.style.backgroundImage = "url(./img/banner2.jpg)";
}

function regresarImagen(elemento){
    elemento.style.backgroundImage = "url(./img/banner1.jpg)";
}