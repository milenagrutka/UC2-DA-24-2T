/*
//Strings:
const texto1 = "Olá mundo"
const texto2 = 'Olá mundo'
const texto3 = `Olá mundo`

const nome = "Milena"
const idade = 26
*/

/*
//Exemplo concatenação:
const frase = "O meu nome é: " + nome + " e minha idade é: " + idade + " anos."
console.log(frase)
*/

/*
//Exemplo template strings:
const frase = `Meu nome é: ${nome} e minha idade é: ${idade} anos`
console.log(frase)
*/

/*
//Exercício
const nomeDoUser = Milena
const corFavorita = Roxo
//template string:
const frase = `Nome: ${nomeDoUser} e Sua cor favorita é: ${corFavorita}`
console.log(frase)
//contatenação:
const frase = "Nome: " + nomeDoUser + " Sua cor favorita? " + corFavorita
console.log(frase)
*/

/*
//Protótipo de Strings
//Propriedade length
const nome = `Milena`
console.log(nome.length)
//Exemplo toLowerCase()
console.log(nome.toLowerCase())
//Exemplo toUpperCase()
console.log(nome.toUpperCase())

const email = " milenagbelo@gmail.com "
//Exemplo trim()
console.log(email.trim())
*/

/*
const frase = "Hoje comi cenoura"
console.log(frase.includes("cenoura"))

console.log(frase.incluides("batata"))
*/

/*
//Exemplo replaceAll
const frase = "Hoje comi cenoura, adoro cenoura."
const novaFrase = frase.replaceAll("cenoura","batata")

console.log(novaFrase)
*/

/*
//Exercício
const frase = "EU AMO O BTS"
const novaFrase = frase.replaceAll("EU AMO O BTS","EU AMI I BTS")
console.log(novaFrase)
console.log(frase.length)
*/

/*
//Exemplo arrays
const frutas = ["abacate","banana","tomate","milho","uva","morango"]
//sequência sempre começa no 0... sendo 0,1,2,3,4,5
const fruta = frutas[2]
//imprime a fruta correspondente ao número na tela.
console.log(fruta)
*/

/*
//Exercício:
const cachorros = ["srd","pischer","golden","husky","beagle"]
const cachorro = Number (prompt("Insira um número"))
console.log(cachorros[cachorro])
*/

/*
//Exemplo lenght
const pokemons = ["bulbasaur","squirtle","charmander","pikachu"]
console.log(pokemons.length)
*/

/*
//Exemplo includes(elemento)
const seriesBoas = ["Vikings","The Big Bang Theory"]
console.log(seriesBoas.includes("Vikings"))
console.log(seriesBoas.includes("Game of Thrones"))
*/

/*
//Exemplo push(elemento)
const numeros =[1,2,3]
numeros.push(4)
console.log(numeros)//[1,2,3,4]
numeros.push(5,6,7,8)
console.log(numeros)//[1,2,3,4,5,6,7,8]
*/

/*
//Exemplo pop(elemento)
const meusPeixes = ["palhaço","mandarim","esturjão"]
console.log(meusPeixes)
meusPeixes.pop()
console.log(meusPeixes)
*/

/*
//Exemplo splice(i,n)
const letras = ["A","B","C","D","E","F","G","H"]
//indices (i) 0 1 2 3 4 5 6 7
letras.splice(2,1)
console.log(letras)
letras.splice(5,2)
console.log(letras)
*/

/*
//Exercícios
const numeros = ["1","2","3","4","5","6"]
console.log(numeros.length)
numeros.push(7)
console.log(numeros)
numeros.splice(3,2)
console.log(numeros)
console.log(numeros.length)
*/
