/*
//Operadores Lógicos:
const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor&&segundoValor
console.log(resultado)
//Exercícios Operador E: &&
const a = true
const b = false
const c = true
//1: const resultado = a && b
//2: const resultado = b && c 
//3: const resultado = a && c 
//4: 
const resultado = a && b && c
console.log(resultado)
*/

/*
//Exercícios Operador Ou: ||
const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor || segundoValor
console.log(resultado)
const a = true
const b = false
const c = true
//1: const resultado = a || b
//2: const resultado = b || c
//3: const resultado = a || c
//4: 
const resultado = a || b || c
console.log(resultado)
*/

/*
//Operador NÃO: !
const primeiroValor = true
const resultado = !primeiroValor
console.log(resultado)
*/

/*
//Exercício resumo:
const nomeDoUser = prompt("Qual seu nome?")
console.log("Nome:", nomeDoUser)
const anoNascimento = prompt("Digite o seu ano de nascimento?")
const anoAtual = prompt("Digite o ano atual?")
const idade = anoAtual - anoNascimento
console.log("Idade", idade)
const maiorDeIdade = idade>=18
console.log("É maior de idade?", maiorDeIdade)
const idadeEm2050 = 2050 - anoAtual
console.log("Idade em 2050",idade+idadeEm2050)
*/

/*
//Exercícios de fixação de interpretação de código:
//Exercício1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//
resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
//
console.log("d. ", typeof resultado)
//
*/


//Exercício2
let primeiroNumero = prompt("Digite um número!")
let segundoNumero = prompt("Digite outro número!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
//

//Exercício de ficação de escrita de código:
//Exercício1
const idade = prompt("qual sua idade?")
console.log("idade:", idade)

const idadeAmigo = prompt("qual a idade do seu melhor amigo?")
console.log("idadeAmigo:", idadeAmigo)

console.log("sua idade é maior do que a do seu melhor amigo?", true ou false)
//

//Exercício2
const numeroPar = prompt("Insira um número par")
//
