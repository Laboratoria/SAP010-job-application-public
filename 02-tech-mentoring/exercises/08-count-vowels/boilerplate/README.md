# Contar vocales / ...

## [Sandbox](https://lab.cs50.io/Laboratoria/job-application-public/main/02-tech-mentoring/exercises/08-count-vowels/boilerplate/)

## Descripción (Español)

Implementa una función (`countVowels`) que reciba un `String` como único
argumento y retorne un objeto con 5 propiedades, una propiedad para cada vocal,
donde la llave (_key_) es la vocal en sí, y el valor (_value_) es un número
(`Number`) que representa en número de veces que aparece dicha vocal en el
`String` que recibe como argumento.

Como ejemplo, los siguientes tests muestran el resultado esperado para dos
invocaciones en particular.

```js
describe('countVowels', () => {
  it('debería contar 3 "a"s', () => {
    expect(countVowels('aaa')).toEqual({
      a: 3,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    });
  });

  it('debería contar la vocales', () => {
    expect(countVowels('aaabrteenkkau')).toEqual({
      a: 4,
      e: 2,
      i: 0,
      o: 0,
      u: 1,
    });
  });
});
```

Tu implementación puede asumir que la función siempre será invocada con un
string como primer argumento.

## Descrição (Português)

Implemente uma função (`countVowels`) que receba uma `String` como único 
argumento e retorne um objeto com 5 propriedades, uma propriedade para cada vogal, 
onde a chave (_key_) é a própria vogal, e o valor (_value_) é um número 
(`Number`) que representa o número de vezes que a vogal aparece na 
`String` que recebe como argumento.

Como exemplo, os testes a seguir mostram o resultado esperado para duas invocações específicas.


```js
describe('countVowels', () => {
  it('deveria contar 3 "a"s', () => {
    expect(countVowels('aaa')).toEqual({
      a: 3,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    });
  });

  it('deveria contar as vogais', () => {
    expect(countVowels('aaabrteenkkau')).toEqual({
      a: 4,
      e: 2,
      i: 0,
      o: 0,
      u: 1,
    });
  });
});
```

Sua implementação pode assumir que a função sempre será chamada com uma string como primeiro argumento.

