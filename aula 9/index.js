//Exercícios de fixação
/*
//Exercício1
let array
//definiu nome para variável que sofrerá alterações
console.log('a.',array)
//imprimi na tela informações da string 'a. como indefinido' pois não foi determinado valor

array = null
//definiu o valor 'null' para variável (seria o mesmo que variável vazia)
console.log('b.',array)
//imprimi na tela informações da string 'b. como null'

array = [3,4,5,6,7,8,9,10,11,12,13]
//definiu uma lista de números para o array
console.log('c.',array.lenght)
//imprimi na tela informações de tamanho de caracteres da string 'c. 11' que seria o número de indices do array

let i = 0
//definiu valor para variável i como o indice 0 (que seria o número 3 no array), ficando assim i = 3(indice 0 na array)
console.log('d.',array[i])
//imprimi na tela informações da string 'd. 3' 

array[i+1]=19
//defini o valor de i+1(que seria o indice 1 no array-nº4) como 19
console.log('e.',array)
//imprimi na tela informações da string 'e. [3,19,5,6,7,8,9,10,11,12,13]' substituindo o 4 por 19

const valor = array[i+6]
//soma o valor de i+6(que seria o indice 9 no array, sendo assim i+9)
console.log('f.',valor)
//imprimi na tela informações da string 'f. 9' que seria o resultado da soma
*/

/*
//Exercício2
const frase = prompt("digite uma frase")
//solicita ao usuário que digite uma frase, utilizar como exemplo a frase: "Subi num ônibus em Marrocos"
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Imprimi na tela a informação "SUBI NUM ÔNIBUS EM MIRROCOS 27" pois os comandos:
//"frase.toUpperCase()" - coloca todas as letras da frase em maiúscula, 
//"replaceAll("A", "I")" - troca a letra A por I na frase,
//"frase.length" - conta o número de caracteres na frase.
*/

/*
//Exercício3
const nomeDoUsuario = prompt("Qual seu nome?")
console.log("Nome:", nomeDoUsuario)
const emailDoUsuario = prompt("Qual seu e-mail?")
console.log("Email", emailDoUsuario)
const frase = "O e-mail" + emailDoUsuario + "foi cadastrado com sucesso. Seja bem-vindo(a)" + nomeDoUsuario + "!"
console.log(frase)
alert(`O e-mail ${emailDoUsuario}, foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`)
*/

/*
//Exercício4
const comidasPreferidas = ["lasanha","pizza","hamburguer","chocolate","crepe"]
//a)
console.log(comidasPreferidas)
//b)
console.log(`Essas são minhas comidas preferidas:
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
//c)
const comidaPreferidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas.splice(1,4) 
comidasPreferidas.push
console.log(comidasPreferidas)
*/

/*
//Exercício5
let listaDeTarefas = []
const tarefa1 = prompt("Digite a tarefa")
listaDeTarefas.push(tarefa1)
*/
