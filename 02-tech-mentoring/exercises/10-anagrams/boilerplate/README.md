# Anagramas / ...

## [Sandbox](https://lab.cs50.io/Laboratoria/job-application-public/main/02-tech-mentoring/exercises/10-anagrams/boilerplate/)

## Descripción (Español)

> Un anagrama (del griego ἀνά -ana-, prefijo que significa "de vuelta", y γράμμα
> -gramma-, "letra") es una palabra o frase que resulta de la transposición de
> letras de otra palabra o frase. Dicho de otra forma, una palabra es anagrama
> de otra si las dos tienen las mismas letras, con el mismo número de
> apariciones, pero en un orden diferente.

Fuente: [Anagrama - Wikipedia](https://es.wikipedia.org/wiki/Anagrama)

Implementa una función que compruebe si dos strings son anagramas entre ellas.
La función recibirá dos argumentos, ambos strings, y debe retornar un valor
booleano, `true` en caso de que sean anagramas y `false` en caso contrario.

La función debe arrojar un error (de tipo `TypeError`) en caso de que alguno de
los dos argumentos esperados no sea de tipo `string`.

Consideraciones:

* La función debe ignorar espacios, puntuación y otros caracteres no
  alfabéticos.
* La función debe ser _case insensitive_. Esto significa que debe considerar
  mayúsculas y minúsculas como iguales (por ejemplo, `a` se considera igual que
  `A`).

### Ejemplos

```js
expect(anagrams('rail safety', 'fairy tales')).toBe(true);
expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBe(true);
expect(anagrams('Hi there', 'Bye there')).toBe(false);
```

[Pruebas unitarias](./test/anagrams.spec.js)

## Descrição (Português)

> Um anagrama (do grego ἀνά -ana-, prefixo que significa "voltar", e γράμμα -gramma-, "letra")
> é uma palavra ou frase que resulta da transposição de letras de outra palavra ou frase. 
> Em outras palavras, uma palavra é um anagrama de outra se as duas tiverem as mesmas letras, 
> com o mesmo número de ocorrências, mas em ordem diferente.

Fonte: [Anagrama - Wikipedia](https://es.wikipedia.org/wiki/Anagrama)

Implemente uma função que verifique se duas strings são anagramas uma da outra. 
A função receberá dois argumentos, ambos strings, e deve retornar um valor booleano, `true` se forem anagramas e `false` caso contrário.

A função deve mostrar um erro (do tipo `TypeError`) caso um dos dois argumentos esperados não seja do tipo string.

Considerações:
* A função deve ignorar espaços, pontuação e outros caracteres não alfabéticos.
* A função deve ser case insensitive. Isso significa que você deve considerar maiúsculas e minúsculas como iguais (por exemplo, a se considera igual a `A`).


### Exemplos

```js
expect(anagrams('rail safety', 'fairy tales')).toBe(true);
expect(anagrams('RAIL! SAFETY!', 'fairy tales')).toBe(true);
expect(anagrams('Hi there', 'Bye there')).toBe(false);
```

[Provas unitárias](./test/anagrams.spec.js)
