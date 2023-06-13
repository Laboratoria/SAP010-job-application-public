# Dynamic Array

## [Sandbox](https://lab.cs50.io/Laboratoria/job-application-public/main/02-tech-mentoring/exercises/15-dynamic-array/boilerplate/)

## Descripción (Español)

[_Enunciado original en Hacker Rank_](https://www.hackerrank.com/challenges/dynamic-array/problem)

***

* Crea un arreglo de `2` dimensiones `arr` con `n` arreglos vaciós.
* Crea una variable `lastAnswer` para guardar un número entero e incialízala a
  `0`.
* Hay `2` tipo de _consultas_ (_queries_):
  1. Query: `1 x y`
     1. Encuentra la lista con el índice `idx = ((x ^ lastAnswer) % n)` en `arr`.
     2. Agrega el valor de `y` al arreglo `arr[idx]`.
  2. Query: `2 x y`
     1. Encuentra la lista con el índice `idx = ((x ^ lastAnswer) % n)` en `arr`.
     2. Dentro de la lista encontrada en el paso anterior, encuentra el valor
        del elemento en el índice `y % size(arr[idx])`, donde `size` es el
        número de elementos en `arr[idx]`. Asigna el valor a `lastAnswer`.
     3. Agrega el valor de `lastAnswer` a los resultados finales.

Nota: El operador `^` corresponde a la operación binaria `XOR`. Más info sobre
`XOR` en [Wikipedia](https://en.wikipedia.org/wiki/Exclusive_or). Por otro lado,
`%` es el operador_ de módulo. En el caso de JavaScript, en realidad se trata
del operador _resto_ (_remainder_), que para este caso es funciona de la misma
manera a solo trabajar con enteros positivos (más info sobre esto último
[acá](https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder/13683709)).

### Descripción de la función a implementar

Completa la función `dynamicArray`, la cual recibe los siguientes argumentos:

- `n`: Número entero que indica el número de listas/arreglos vacíos con los que
  inicializar `arr`.
- `queries`: Arreglo de _consultas_. Cada consulta/query es a su vez un arreglo
  de `3` números enteros, representando el tipo de query y los valores de `x` e
  `y`.

Valor de retorno: un arreglo con los resultados de cada consulta de tipo `2` en
el orden en el que se presentaron.

### Limitaciones

* `1 <= n,q <= Math.pow(10, 5)`
* `0 <= x <= Math.pow(10, 9)`
* `0 <= y <= Math.pow(10, 9)`
* Tenemos la garantía de que las consultas de tipo `2` nunca tratarán de acceder
  un arreglo o índice vacíó o no definido.

## Descrição (Português)

[_Enunciado original em Hacker Rank_](https://www.hackerrank.com/challenges/dynamic-array/problem)

***

* Crie um array de `2` dimensões `arr` com n arrays vazios.

* Crie uma variável `lastAnswer` para guardar um número inteiro e comece com 
`0`.

* Há `2` tipos de _consultas_ (_queries_):

  1. Query: `1 x y`
     1. Encontre a lista com o índice `idx = ((x ^ lastAnswer) % n)` em `arr`.
     2. Atribua o valor de `y` ao array `arr[idx]`.
  2. Query: `2 x y`
     1. Encontre a lista com o índice `idx = ((x ^ lastAnswer) % n)` em `arr`.
     2. Dentro da lista encontrada na etapa anterior, encontre o valor do 
        elemento no índice `y % size(arr[idx])`, onde `size` é o 
        número de elementos en `arr[idx]`. Atribua o valor a `lastAnswer`.
     3. Atribua o valor de `lastAnswer` aos resultados finais.

Nota: O operador ^ corresponde à operação binária `XOR`. Mais informações sobre
`XOR` em [Wikipedia](https://en.wikipedia.org/wiki/Exclusive_or). Por outro lado,
`%` o operador_ módulo. No caso do JavaScript, na verdade é o operador de _resto_ 
(_remainder_), que nesse caso funciona da mesma forma, apenas trabalhando com números inteiros positivos (mais informações sobre este último [aqui](https://stackoverflow.com/questions/13683563/whats-the-difference-between-mod-and-remainder/13683709)).


### Descrição da função a implementar

Complete a função `dynamicArray`, a qual recebe os seguintes argumentos:

- `n`: Número Inteiro indicando o número de listas/matrizes vazias para inicializar com `arr`.
- `queries`: Array de _consultas_. Cada query é por sua vez, uma matriz de `3` números inteiros
  representando o tipo de query e os  valores de `x` e `y`.

Valor de retorno: Um array com os resultados de cada consulta tipo `2` na ordem em que foram apresentados.


### Limitações

* `1 <= n,q <= Math.pow(10, 5)`
* `0 <= x <= Math.pow(10, 9)`
* `0 <= y <= Math.pow(10, 9)`
* Temos a garantia de que as consultas do tipo `2` nunca acessarão uma matriz ou índice vazio ou indefinido.

