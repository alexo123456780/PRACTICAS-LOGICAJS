const esPalindromo = (palabra) =>{

    let resultado;
    //convierto la palabra en minusculas y con la funcion replace quito los espacios que hayan en la palabra
    let palabraLimpia = palabra.toLowerCase().replace(/\s+/g , '');


    //la funcion .split convierte una cadena de texto a un array, el reverse lo ordena desendetenmente y el join es como la union de las palabras;
    let palabraInveeritida = palabraLimpia.split('').reverse().join('');

    if(palabraLimpia === palabraInveeritida){

        resultado = `${palabra} es un palindromo`;

    }else{

        resultado = `${palabra} no es un palindromo`;
    }

    return resultado

}

console.log(esPalindromo('javascript'));