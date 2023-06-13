# Máscara para Tarjeta de Crédito / ...

## [Sandbox](https://lab.cs50.io/Laboratoria/job-application-public/main/02-tech-mentoring/exercises/09-mask-credit-card/boilerplate/)

## Descripción (Español)

Implementa una función `maskify` que reciba un `string` como único argumento y
retorne un `string` donde todos menos los últimos cuatro caracteres sean
reemplazados por un numeral/gato (`#`).

Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

### Ejemplo de uso

```js
maskify("4556364607935616"); // => "############5616"
maskify("64607935616"); // => "#######5616"
maskify("1"); // => "1"
maskify(""); // => ""
```

## Descrição (Português)

Implemente uma função `maskify` que receba uma `string` como único argumento e 
retorne uma `string` onde todos menos os últimos quatro caracteres sejam substituídos por um numeral/hashtag (`#`).

Esta função deve sempre manter os últimos quatro caracteres intactos, mesmo quando a string for mais curta.

### Exemplo de uso

```js
maskify("4556364607935616"); // => "############5616"
maskify("64607935616"); // => "#######5616"
maskify("1"); // => "1"
maskify(""); // => ""
```
