# Exercícios Santander Coders (Módulos 2)

Atividades propostas no curso Santander Coders | Web Full-Stack Degree realizado na [Let's Code](https://www.letscode.com.br/). Exercícios de fixação em JavaScript envolvendo Higher-Order Functions, Module Pattern, Programação Orientada a Objeto, Classes, Herança e Polimorfismo.

## Atividade 1
_over-18.js_

* Criada uma função `makeStrings` que recebe um objeto de pessoas `people` e verifica quais possuem mais de 18 anos, retornando strings informando se cada uma pode ou não assistir The Matrix (apenas > 18 anos).
* Retorno esperado:
`[
    'Angelina Jolie can go to The Matrix',
    'Eric Jones is under age!!',
    'Paris Hilton is under age!!',
    'Kayne West is under age!!',
    'Bob Ziroll can go to The Matrix',
]`

## Atividade 2
_voters.js_

* Dada uma série de eleitores em potencial `voters`, retorna um objeto que represente os resultados da votação.
* O resultado apresenta quantos eleitores potenciais tinham entre 18 e 25, quantos eram de 26 a 35, quantos de 36 a 55 anos e quantos de cada uma dessas faixas etárias realmente votaram.
* O objeto resultante contendo esses dados possui 6 propriedades:
  * Número de eleitores entre 18 e 25 que votaram `numYoungVotes`
  * Número de eleitores entre 18 e 25 total `numYoungPeople`
  * Número de eleitores entre 26 a 35 que votaram `numMidVotes`
  * Número de eleitores entre 26 a 35 total `numMidPeople`
  * Número de eleitores entre 36 a 55 que votaram `numOldVotes`
  * Número de eleitores entre 36 a 55 total `numOldPeople`
* Retorno esperado:
`{
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotes: 3,
    numMidPeople: 4,
    numOldVotes: 3,
    numOldPeople: 4
}`

## Atividade 3
_module-calculator.js_

### A aplicação

* Módulo calculadora que possui as seguintes funções:
  * .enter(data)
    * Valida e armazena o número/operador recebido em **data**
  * .equals()
    * Executa a operação dos dois últimos números inseridos pelo usuários
  * .list(data)
    * Mostra todas as operações já executadas na calculadora, seguidas de seus resultados
  * .reset()
    * Apaga todo o histórico armazenado na calculadora

### Usando a aplicação

* Devem ser inseridos dados utilizando `calculator.enter(data)`, onde data deve seguir a ordem número - aperador - número.
* Exemplo de teste:
  - `calculator.enter(10);`
  - `calculator.enter('*');`
  - `calculator.enter(7);`
  - `calculator.equals();`
  - `calculator.list();`
  - `calculator.reset();`
