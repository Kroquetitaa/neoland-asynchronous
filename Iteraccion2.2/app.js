// 2.2 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

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
    let convertCountries = convertToJson.country;
    let convertName = convertToJson.name;
    mapData( convertCountries, convertName );
}

const mapData = (data, name) => {
    console.log( `El nombre ${name} es comun en los paises con las siguientes probabilidades:` );
    console.log( data.map( value => {
        return ({
            pais: value.country_id,
            probabilidad: (parseInt(value.probability * 100)) + '%'
        })
    } ));
}

