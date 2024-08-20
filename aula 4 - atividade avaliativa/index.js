// Defina a funcionalidade: Verificar se o número é par ou ímpar
const numeroDoUser = Number(prompt("Digite um numero: "))

/* Verificando se o resto da divisão do número é igual a 0
Caso o resto da divisão for igual a 0, o numero do usuário é par
Caso contrario o numero é impar
*/

/*
Com o código:

if(numeroDoUser % 2 == 0) {
  alert("o numero é par")
}
else {
    alert("O numero é impar")
}

Foram feitos os seguintes testes:  

CASO DE TESTE 1
ENTRADA: 1
SAÍDA ESPERADA: Este número é ímpar
SAÍDA REAL: Este número é ímpar
RESULTADO: Passou
ANÁLISE DE RESULTADOS: Código funcionando

CASO DE TESTE 2
ENTRADA: 2
SAÍDA ESPERADA: Este número é par
SAÍDA REAL: Este número é par
RESULTADO: Passou
ANÁLISE DE RESULTADOS: Código funcionando

CASO DE TESTE 3
ENTRADA: - 10
SAÍDA ESPERADA: Este número é par
SAÍDA REAL: Este número é par
RESULTADO: Passou
ANÁLISE DE RESULTADOS: Códgio funcionando

CASO DE TESTE 4
ENTRADA: -3
SAÍDA ESPERADA: Este número é ímpar
SAÍDA REAL: Este número é ímpar
RESULTADO: Passou
ANÁLISE DE RESULTADOS: Código funcionando

CASO DE TESTE 5
ENTRADA: *
SAÍDA ESPERADA: Erro
SAÍDA REAL: Este número é ímpar
RESULTADO: Falhou
ANÁLISE DE RESULTADOS: Código estava aceitando letras e caracteres como um número ímpar pois não tinha sido adicionado uma conta para a váriavel de número impar.
Código foi atualizado com conta para número ímpar e mensagem caso usuário insira um número inválido (letras ou caracteres por exemplo)
*/

//código final ficou:
if(numeroDoUser % 2 == 0) {
  alert("Este número é par")
}
else if(numeroDoUser % 2 == 1){
    alert("Este número é ímpar")
}else{
  alert("Digite um número válido")
}

//Trabalho feito por Milena Grutka e Yasmin Herbstrith