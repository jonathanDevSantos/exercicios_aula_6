/// Desafio 8
let contagem = 0;
let palavra = prompt("Informe uma palavra:");

palavra = palavra.toLowerCase();

//console.log(palavra);

for(let i = 0; i < palavra.length; i++){
  if(palavra[i] === 'a' || palavra[i] === 'e' || palavra[i] === 'i' || palavra[i] === 'o' || palavra[i] === 'u'){
    contagem++;
  }
}

console.log("A palavra informada'" + palavra + "' possui " + contagem + " vogais.");

/// Desafio 9

let array = [9, 4, 5, 2, 7, 1, 3, 6, 10, 8];
let tamanho = array.length;

for(let i = 0; i < tamanho - 1; i++){
    let min = i;
    for(let j = i + 1; j < tamanho; j++){
        if(array[j] < array[min]){
            min = j;
        }
    }

    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
}
console.log("Array ordenado:", array);
                                  
/// Desafio 9.1

let array = [9, 4, 5, 2, 7, 1, 3, 6, 10, 8];

array.sort(function(a, b){
    return a - b;
});

console.log("Array ordenado:", array);
                                  
/// Desafio 10

let resultados = [];

console.log("Rolagens individuais:");
for(let i = 0; i < 2; i++){
    let resultadoDado = Math.floor(Math.random() * 6) + 1;
    resultados.push(resultadoDado);
    
    console.log("Dado " + (i + 1) + ": " + resultadoDado);
}

let soma = resultados[0] + resultados[1];
console.log("Soma dos valores: " + soma);