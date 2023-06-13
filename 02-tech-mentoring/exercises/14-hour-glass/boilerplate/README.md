# Hourglass Sum (2D Array - DS)

## [Sandbox](https://lab.cs50.io/Laboratoria/job-application-public/main/02-tech-mentoring/exercises/14-hour-glass/boilerplate/)

## Descripción (Español)

[_Enunciado original en Hacker Rank_](https://www.hackerrank.com/challenges/2d-array/problem)

***

Dado un arreglo bidimensional (`arr`) de `6` `x` `6`.

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

Un _reloj de arena_ en `arr` es un subconjunto de valores con índices que siguen
el siguiente patrón representado aquí gráficamente:

```
a b c
  d
e f g
```

Hay `16` _relojes de arena_ en `arr`. La _suma_ de un _reloj de arena_ es la
suma de los valores del _reloj_. Calcula la _suma_ de cada _reloj de arena_ en
`arr` y retorna la _suma_ máxima. El arreglo `arr` siempre tendrá dimensiones de
`6` `x` `6`.

### Ejemplo

Si `arr` es:

```
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
```

Las `16` _sumas_ de los relojes serían:

```
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18
```

La suma que produce el valor más alto es `28`, del _reloj_ que comienza en la
fila de índice `1` (la segunda), y la columna de índice `2` (la tercera).

```
0 4 3
  1
8 6 6
```

### Descripción de la función a implementar

Completa la función `hourglassSum`. La función `hourglassSum` recibe un único
argumento:

- `arr`: Arreglo bidimensional (`6x6`) de números enteros

Valor de retorno:

- `Number`: La función debe retorna un número entero con la suma máxima.

### Limitaciones

* `-9 <= arr[i][j] <= 9`
* `0 <= i,j <= 5`

### Otro ejemplo

Si `arr` es:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

La función debería retornar `19`.

#### Explicación

`arr` contiene los siguientes _relojes de arena_:

![](https://s3.amazonaws.com/hr-assets/0/1534256743-35b846ad4a-hourglasssum.png)

El _reloj de arena_ con la suma de mayor valor (`19`) es:

```
2 4 4
  2
1 2 4
```

## Descrição (Português)

[_Enunciado original em Hacker Rank_](https://www.hackerrank.com/challenges/2d-array/problem)

***

Dado um array bidimensional (`arr`) de `6` `x` `6`.

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
```

Uma _ampulheta_ em `arr` é um subconjunto de valores com índices que 
seguem o seguinte padrão representado aqui graficamente:


```
a b c
  d
e f g
```

Há `16` _ampulhetas_ em `arr`. A _soma_ de uma _ampulheta_ é a 
soma dos valores do _relógio_. Calcule a _soma_ de cada _ampulheta_ em 
`arr` e retorne a _soma_ máxima. O array `arr` sempre terá dimensões de `6` x `6`.

### Exemplo

Se `arr` é:


```
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
```

As `16` _somas_ dos relógios seriam:

```
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18
```

A soma que tem o valor mais alto é `28`, do _relógio_ que começa na
fileira de índice `1` (a segunda), e na coluna de índice `2` (a terceira).


```
0 4 3
  1
8 6 6
```

### Descrição da função a implementar

Complete a função `hourglassSum`. A função `hourglassSum` recebe um único 
argumento:

- `arr`: Array bidimensional (`6x6`) de números inteiros

Valor de retorno:

- `Number`: A função deve retornar um número inteiro com a soma máxima.


### Limitações

* `-9 <= arr[i][j] <= 9`
* `0 <= i,j <= 5`

### Otro ejemplo

Se `arr` é:

```
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
```

A função deveria retornar `19`.


#### Explicação

`arr` contém as seguintes _ampulhetas_:

![](https://s3.amazonaws.com/hr-assets/0/1534256743-35b846ad4a-hourglasssum.png)

A _ampulheta_ com a soma de maior valor (`19`) é:

```
2 4 4
  2
1 2 4
```
