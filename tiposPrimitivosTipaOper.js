// Agora é a hora da mão na massa no código! No exemplo abaixo, temos as informações de um paciente. 
// Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail. 
// Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. 
// Exemplo: console.log(typeof patientId) retornará number.
let nulo = null;
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

//Nesse exercicio valos testar a funcao typeof dentro do console para verificar o tipo de variavel

console.log(typeof patientId);  //Number
patientId = '50';
console.log(typeof patientId);  //string

console.log(typeof isEnrolled);  //bool
console.log(typeof patientInfo);  //----->
console.log(typeof patientEmail);  //----->

//CASO QUERIA CONSULTAR OS OPERADORES: https://www.w3schools.com/js/js_operators.asp

//Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
const base = 5;
let height = 8;

//Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. 
//Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

const area = base * height;
console.log(area);

//Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const perimeter = base + height;
console.log(perimeter);

//OPERADORES

let valores = 2;
console.log(valores + valores);     //ADIÇÃO
console.log(valores - valores);     //SUBTRAÇÃO
console.log(valores * valores);     //MULTIPICAÇÃO
console.log(valores / valores);     //DIVISÃO
console.log(valores ** valores);    //PONTÊCIA
console.log(valores % valores);     //RESTO DA DIVISÃO