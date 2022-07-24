// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const api = async( url ) => {
    let peticion = await fetch( url );
    return converToJson( peticion );
}

const converToJson = async( peticionApi ) => {
    let convertToJson = await peticionApi.json();
    console.log(  convertToJson );
}

api( 'https://api.agify.io?name=michael' )