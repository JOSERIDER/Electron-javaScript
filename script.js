//Mostar la iagen seleccionada.


//Obtenemos la primera imagen de la lista al cargar la página.
let firstImg = document.querySelector('img'),
    contenedor = document.getElementById('seleccionada'),
    secondImgage;



//Clonamos la imagen.
secondImgage = firstImg.cloneNode();
//Añadimos la imagen al contenedor.
contenedor.appendChild(secondImgage);

let galeria = document.getElementById('contenedor');

//1.Devuelve el array de imagenes
function selector() {
    return Array.from(galeria.querySelectorAll('img'));
}

//-----SIGUIENTE-----

// Al darle al boton de siguie, tememos que recorrer el array.

let siguiente = document.getElementById("next");
let count = 0;
//Pasar a la siguiente imagen
siguiente.addEventListener('click', () => {
    //Eliminar el objeto del contenedor

    //Añadir la imagen al contenedor.
    let array = selector();
    //Clonamos el elemento que vamos a mostar.
    let clon = array[count].cloneNode();
    //Elimina el primer hijo que hay en el contenedor
    newFunction(clon);

    count++;
    if (count == array.length) {
        count = 0;
    }


});

//-----ANTERIOR------
//Retroceder a la imagen anterior

let anterior = document.getElementById("previus");
let secondCount = 0;
anterior.addEventListener('click', () => {
    
    count--;
    let array = selector();
    let clon = array[count].cloneNode();
    
    newFunction(clon);
    

    if (count <= 0) {
        
        count = array.length - 1;
    }

});

//-----Seleccionar la imagen clicando.-----

galeria.addEventListener('click', e => {

    const t = e.target;
    let array = selector();
    count = array.indexOf(t);

    let clon = array[count].cloneNode();

    contenedor.removeChild(contenedor.firstChild);
    contenedor.appendChild(clon);


})

function newFunction(clon) {
    contenedor.removeChild(contenedor.firstChild);
    contenedor.appendChild(clon);
}
