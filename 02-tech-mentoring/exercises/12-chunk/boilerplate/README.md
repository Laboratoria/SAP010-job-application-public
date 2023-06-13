# Chunk / ...

## [Sandbox](https://lab.cs50.io/Laboratoria/job-application-public/main/02-tech-mentoring/exercises/12-chunk/boilerplate/)

## Descripción (Español)

Implementa una función que dado un arreglo y un número `n`, divida el arreglo
recibido en _subarreglos_ de longitud máxima `n`.

El valor de retorno debe ser un arreglo donde cada elemento sea un subarreglo.
Tendremos así un arreglo de arreglos.

### Ejemplos

```js
chunk([1, 2, 3, 4], 2) // --> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) // --> [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) // --> [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) // --> [[1, 2, 3, 4, 5]]
```

## Descrição (Português)

Implemente uma função que dado um array e um número `n`, divida o array
recebido em _subarrays_ de tamanho máximo `n`.

O valor de retorno deve ser um array onde cada elemento é um subarray. 
Teremos assim um array de arrays.

### Exemplos

```js
chunk([1, 2, 3, 4], 2) // --> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // --> [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) // --> [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) // --> [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) // --> [[1, 2, 3, 4, 5]]
```
