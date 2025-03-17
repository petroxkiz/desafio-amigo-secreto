// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = document.getElementById('listaAmigos'); 
let inputAmigo = document.getElementById('amigo');

// se crea la lista para almacenar los nombres
let amigos = [];

let flag = false;

function agregarAmigo() {
    
    // se utiliza para poder agregar otros nombres y sea un nuevo sorteo, de esta manera se limpia el resultado anterior
    if(flag==true){
        resultado.innerHTML ="";
        flag= !flag;
    }


    // se utiliza el .trim para eliminar espacios vacíos al principio o final del nombre
    let nombre = inputAmigo.value.trim();
    
    // se valida que no ingrese un nombre vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // se agrega nombre a la lista
    amigos.push(nombre); 

    // se muestra el nombre que se agregó al sorteo
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    inputAmigo.value = "";

    // se mantiene el cursor en el campo de texto
    inputAmigo.focus(); 
}

function sortearAmigo() {

    // se utiliza para que al momento de querer haer un nuevo sorteo y no haber agregado nuevos nombrs, se limpie el resultado anterior
    if(flag==true){
        resultado.innerHTML ="";
        flag= !flag;
    }

    flag =  !flag;

    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega amigos primero."); // para que agreguen primero nombres y tener con qué hacer un sorteo
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // se limpia el campo con los nombres y la lista de amigos
    listaAmigos.innerHTML = "";
    amigos = [];


    // se muestra el amigo sorteado en el elemento con id "resultado"
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado} `;

    
    
}
