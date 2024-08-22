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
//bool1 recebe verdadeiro
const bool2 = false
//bool2 recebe falso
const bool3 = !bool2
//bool3 recebe o inverso de bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//imprime bool1 && bool2 falso
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//Imprime bool1 && bool2 && bool3 falso
resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
//Imprime o resultado anterior invertido && (bool1 || bool2) true
console.log("d. ", typeof resultado)
//Imprime o tipo do resultado anterior bool
*/

/*
//Exercício2
let primeiroNumero = prompt("Digite um número!")
let segundoNumero = prompt("Digite outro número!")
const soma = primeiroNumero + segundoNumero
console.log(soma)
//Será impresso a junção do primeiro número com o segundo. Para ajustar devemos converter para Number os prompts.

//Solução para os códigos impressos:
let primeiroNumero = Number (prompt("Digite um número!"))
let segundoNumero = Number (prompt("Digite outro número!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)
*/

/*
//Exercício de fixação de escrita de código:
//Exercício1
const idade = Number (prompt("Qual sua idade?"))
console.log("idade:", idade)

const idadeAmigo = Number (prompt("Qual a idade do seu melhor amigo(a)?"))
console.log("idadeAmigo:", idadeAmigo)

let resultado = idade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
*/

/*
//Exercício2
//a-
const numeroPar = Number(prompt("Insira um número par"))
//b-
console.log(numeroPar%2)
//c- Sim, sempre dá o número 0 pois um número par sempre é divido por 2.
//d- O resto da divisão é diferente de 0.
*/

/*
//Exercício3
const idade = Number(prompt("Qual sua idade?"))
//a-
const resultado = idade * 12
console.log("Sua idade em meses é:", resultado)
//b-
let resultado1 = idade * 365
console.log("Sua idade em dias é:", resultado1)
//c-
resultado1 *= 24
console.log("Sua idade em horas é:", resultado1)
*/

//Exercício4
const numeroUm = Number(prompt("Insira um número:"))
const numeroDois = Number(prompt("Insira outro número:"))

const resultado = numeroUm > numeroDois
const resultado = numeroUm === numeroDois
const resultado = numeroUm % numeroDois
const resultado = numeroDois % numeroUm
