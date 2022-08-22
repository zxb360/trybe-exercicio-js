// Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner, sobre o uso do VS Code.

//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
const a = 25;
const b = 40;
const c = 70.3;
// Adição (a + b)
console.log(a + (b - c));
// Subtração (a - b)
console.log(a - b);
// Multiplicação (a * b)
console.log(a * b);
// Divisão (a / b)
console.log(a / b);
// Módulo (a % b)
console.log(a % b);

// var meuInt = 5;
// var meuFloat = 6.667;
// meuInt;
// meuFloat;

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// if(a > b){
//     console.log('O A é maior: ', a);
// } else {
//     console.log('O B é maior: ',b);
// }

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
if(a > b && a > c){
    console.log('A: ',a);
} else if(b > a && b > c){
    console.log('B: ', b);
} else {
    console.log('C: ', c);
}

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

let valor = 'positivo';
switch (valor){
    case 'positivo':
        console.log('Positivo');
        break;

    case 'negativo':
        console.log('negativo');
        break;
        
    default:
        console.log("zero");

}