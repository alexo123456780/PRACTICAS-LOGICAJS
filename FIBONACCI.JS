const fibonacci = (valor) =>{

    let resultado = [0,1];

    for(let i = 2 ; i< valor; i++){

        resultado.push(resultado[i-1] + resultado [i-2]);
               
    }

    console.log(`Serie de fibonnaci: ${resultado.join('-')}`);


};

fibonacci(10);