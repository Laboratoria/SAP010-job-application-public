# Exercicios

- [**Stringitis**](./01-stringitis)

  Dificuldade: `fácil` / Etiquetas: `String`

  Faça uma função que tenha um comportamento equivalente a `String.prototype.contains`, mas sem usar métodos de `String`. Alternativamente você pode
  propor uma solução que faça o uso de `.slice`, `.substring` ou `.substr.`
  
  Esse exercício é usado frequentemente como exercício de _exemplo_ ou de _aquecimento._


- [**Duas colunas**](./02-dos-columnas)

  Dificuldade: `fácil` / Etiquetas: `HTML`, `CSS`, `media-queries`
  
  Construa uma interface web (`HTML + CSS`) com um _layout_ de duas colunas
  com tamanhos relativos e responsivo (em telas pequenas deve passar a ter uma coluna).


- [**Botões de alerta**](./03-botones-alerta)

  Dificuldade: `fácil` / Etiquetas: `DOM`, `Event`, `Array`
  
  Construa uma UI (`HTML`, `CSS` e `JavaScript`) com botões e manipule os eventos
  de click desses botões. Você também deve _relacionar_ os botões com os índices
  de um array.

- [**Edição instantânea**](./04-edicion-instantanea)
  
  Dificuldade: `média` / Etiquetas: `DOM`, `Event`

  Crie uma interface web com uma linha de texto que, ao ser clicada, permite ao 
  usuário editá-la ali mesmo (de texto passa a ser <input>).

- [**Maiores e menores**](./05-mayores-menores)

  Dificuldade: `média` / Etiquetas: `Array`, `Logic`

  Implemente uma função que dado uma array de números devolva outro array 
  com 3 elementos: o número maior, o menor e o segundo maior do array.


- [**Nomes**](./06-nombres)

 Dificuldade: `fácil` / Etiquetas: `Array`, `String`
 
 Implemente uma função que recebe um array de strings com nomes de 
 pessoas, e retorna um novo array de strings somente com os nomes formatados de uma forma particular.


- [**Palíndromo**](./07-palindrome)

  Dificuldade: `fácil` / Etiquetas: `String`, `Logic`
  
  Crie uma função que identifica se uma string é um palíndromo (isto é, 
  é lida da mesma forma começando da direita ou da esquerda), retornando true se é ou false se não é.


- [**Count vowels**](./08-count-vowels)

  Dificuldade: `fácil` / Etiquetas: `String`, `Object`

  Implemente uma função que receba uma String como único argumento e retorne
  um objeto com 5 propriedades; uma para cada vogal, onde a chave (_key_) é a      
  vogal em si, e o valor (_value_) é um número (`Number`) que representa 
  o número de vezes que aparece a vogal na `String` que recebe como argumento.

- [**Mask Credit Card**](./09-mask-credit-card)

  Dificuldade: `fácil` / Etiquetas: `String`
  
  Implemente uma função que receba uma string como único argumento e retorne 
  uma `string` onde todos, menos os últimos quatro caracteres, sejam substituídos por um numeral/hashtag (`#`).


- [**Anagramas**](./10-anagrams)

  Dificuldade: `fácil` / Etiquetas: `String`, `Logic`
  
  Implemente uma função que verifique se duas strings são anagramas entre elas, ou seja, se as duas
  tem as mesmas letras, com o mesmo número de aparições, mas em ordem diferente.


- [**Capitalize**](./11-capitalize)

  Dificuldade: `fácil` / Etiquetas: `String`
  Implemente uma função que receba uma `String`, transforme a primeira letra de cada palavra
  em maiúscula e retorne uma nova `String` com o resultado.


- [**Chunk**](./12-chunk)

  Dificuldade: `media` / Etiquetas: `Array`, `Logic`
  
  Implemente uma função que dado um array e um número `n`, divida o array
  recebido em sub-arrays de tamanho máximo `n`.


- [**FizzBuzz**](./13-fizzbuzz)

  Dificuldade: `fácil` / Etiquetas: `Logic`

  Implemente uma função que imprima números de `1` a `n`, mas para os 
  múltiplos de `3` imprima `fizz` ao invés do número, e para os múltiplos de `5`
  imprima buzz. Para números que sejam múltiplos de ambos (`3` e `5`) deve imprimir fizzbuzz.
  
  Esse exercício é um clássico, e ajuda a entender como evitar a repetição de condições (ver exemplo
  [_naive_](./13-fizzbuzz/solutions/fizzbuzz-naive.js) vs
  [_mejor_](./13-fizzbuzz/solutions/fizzbuzz-better.js)).


- [**Hourglass sum**](./14-hour-glass)

  Dificuldade: `média` / Etiquetas: `Array`, `Logic`
  
  Dado um array de números de duas dimensões (`matriz`), temos que identificar elementos 
  seguindo um padrão (`ampulheta`), calcular a soma de cada subconjunto  e retornar a de maior valor.


- [**Dynamic array**](./15-dynamic-array)

  Dificuldade: `média` / Etiquetas: `Array`, `Math (^, %)`

  Implemente uma função que siga uma série de passos, tendo que criar uma série 
  de listas/arrays e realizar operações/consultas que recebemos como input.
  
  Este exercício pode ser um pouco assustador porque fala sobre operações em bits como XOR e operações 
  matemáticas como %, mas na verdade trata-se principalmente de seguir os passos bem detalhados do enunciado. 
  Requer uma leitura minuciosa do enunciado e seguir o que está descrito ali, não necessariamente inventar algo ou resolver um problema de lógica.


- [**Left rotation**](./16-left-rotation)

  Dificuldade: `fácil` / Etiquetas: `Array`, `Logic`

  Uma operação de rotação no sentido anti-horário (left rotation), sobre um array 
  de tamanho `n` move cada elemento do array `1` unidade para a esquerda. 
  Dado um número inteiro `d`, rotacione o array `arr` para a esquerda esse número de 
  vezes (`d`) e retorne o resultado.
  
  Esse exercício tem o objetivo de explorar diferentes implementações, por 
  exemplo usando loops, recursividade, métodos de array como `slice`, etc).
