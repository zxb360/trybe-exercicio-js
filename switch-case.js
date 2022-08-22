//Switch e Case
// O switch/case funciona de maneira similar ao if/else, porém com algumas diferenças.
// No switch/case colocamos dentro do switch o que deve ser analisado e então criamos nossas condicionais com o case. 


// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';

const estado = 'lista';
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'.

switch(estado){
    case "aprovado":
        console.log("muito bem, vc foi aprovado");
        break;
    
    case "lista":
        console.log("Em espera");
        break;
    
    case "reprovado":
        console.log("Desculpe, vc não foi aprovado");
        break;
     
    default:
        console.log("não se aplica");    
}