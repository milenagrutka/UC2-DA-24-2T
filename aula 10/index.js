//Condicionais: Se ou Senão - decisão 
/*
//Exemplo if - se
let condicao1 = true
if(condicao1){
    //ação
    console.log("Exibiu condicao1")
}

let condicao2 = false
if(condicao2){
    //ação
    console.log("Exibiu condicao2")
}
*/

/*
//Exercício if - se
const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))

if(numero1 === numero2) {
    //ação
    console.log("Sucesso")
}
*/

/*
//Exemplo do número diferente
const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))

if(numero1 !== numero2) {
    //ação
    console.log("Os números são diferentes")
}
*/

/*
//Exemplo else - senão
let condicao = false
if (condicao){
    console.log("A condição é verdadeira")
} else {
    console.log("A condição é falsa")
}
*/

/*
//Exercício else - senão
const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))

if(numero1 === numero2){
    console.log("Os números são iguais")
} else {
    console.log("Os números são diferentes")
}
*/

/*
//Exemplo if + else
let condicao1 = false
let condicao2 = true

if(condicao1){
    console.log("condicao1 true")
} else {
    console.log("condicao1 false")
    if(condicao2){
        console.log("condicao2 true")
    }
}
//Exemplo simplificado
if(condicao1){
    console.log("condicao1 true")
} else if(condicao2){
        console.log("condicao2 true")
    }
*/

/*
//Exemplo if + else if + else
let condicao1 = false
let condicao2 = false
if(condicao1){
    console.log("condicao1 true")
} else if(condicao2){
        console.log("condicao2 true")
}else{
    console.log("Entrou no else")
}
*/

/*
//Exercício
const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))

if(numero1 > numero2){
    console.log("O primeiro número é maior que o segundo")
} else if(numero1 < numero2){
    console.log("O primeiro número é menor que o segundo")
}else if(numero1 === numero2){
    console.log("Os números são iguais")
}
*/

/*
//Switch case
let paisDeOrigem = prompt("Digite o seu país de origem:")

switch(paisDeOrigem){
    case "Brasil":
        console.log("Brasileiro")
        break
    case "EUA":
        console.log("Americano")
        break
    case "Inglaterra":
        console.log("Inglês")
        break
    default :
    console.log("Nenhuma nacionalidade encontrada")
    break
}
*/

/*
//Exercício1 Switch case
let pokemonInicial = prompt("Escolha seu pokemon inicial entre: Bulbasaur, Charmander ou Squirtle")

switch(pokemonInicial){
    case "Bulbasaur":
        console.log("O pokemon escolhido foi Bulbasaur do tipo planta e veneno")
        break
    case "Charmander":
        console.log("O pokemon escolhido foi Charmander do tipo fogo")
        break
    case "Squirtle":
        console.log("O pokemon escolhido foi Squirtle do tipo água")
        break
    default :
    console.log("Nenhum pokemon inicial escolhido")
    break
}
*/

/*
//Exercício1 Switch case
let ChapeuSeletor = prompt("Digite seu nome e descubra sua casa em Hogwarts:")

switch(ChapeuSeletor){
    case "Hermione":
        console.log("Grifinória")
        break
    case "Ana":
        console.log("Lufa-Lufa")
        break
    case "Luna":
        console.log("Corvinal")
        break
    case "Narcisa":
        console.log("Sonserina")
        break
    default :
    console.log("Nenhum nome válido inserido")
    break
}
*/

/*
//Condicionais e Operadores lógicos
//Exemplo &&:
let condicao1 = true
let condicao2 = false

if (condicao1 && condicao2){
    //Entra aqui se ambas forem true
    console.log("As duas condições são verdadeiras")
}
else{
    //Entra aqui se condicao2 for false
    console.log("Alguma condição é falsa")
}
*/

/*
//Exemplo ||:
let condicao1 = true
let condicao2 = false

if (condicao1 || condicao2){
    console.log("Alguma das condições é verdadeira")
}
else{
    console.log("Todas são falsas")
}

if(!condicao1){
    console.log("A condicao1 é falsa")
}else{
    console.log("A condicao1 é verdadeira")
}
*/


//Exercício:
let ensinoMedio = prompt("Você concluiu o ensino médio?")
let idade = prompt("Qual a sua idade?")
let faculdade = prompt("Você está cursando outra faculdade no momento?")

if (ensinoMedio === 'não') {
    console.log("Você deve ter concluído o ensino médio para poder estudar na faculdade.")
}
else{
    console.log("Você pode estudar na faculdade")
}
if (idade < 18) {
    console.log("Você deve ter 18 anos ou mais para poder estudar na faculdade.")
}
else{
    console.log("Você pode estudar na faculdade")
}
if (faculdade === 'sim') {
    console.log("Você não pode estar cursando outra faculdade.")
}
    else{
        console.log("Você pode estudar na faculdade")
}