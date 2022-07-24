// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';

const baseUrl = 'https://api.nationalize.io';
let input = document.querySelector('input');
let button = document.querySelector('button');

const data = () =>{
    const value = input.value;
    let peticion = baseUrl + '/?name=' + value;
    searchApi( peticion );
}

const searchApi = async( url ) => {
    let peticion = await fetch( url );
    let convertToJson = await peticion.json();
    console.log( convertToJson.country );
}