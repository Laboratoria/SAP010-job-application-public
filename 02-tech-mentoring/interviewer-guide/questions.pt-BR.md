# Preguntas conceptuales

## HTML / CSS

* Para que são usados os `data-attributes`?

* Por que é importante não abusar do uso de `divs`?

* Explique com um exemplo o que são `media queries`.

* Quando você recomenda (contexto flexbox - grid layout) usar `justify-content` ou `align-items`?


## Javascript

* Explique, com vários exemplos, o que se entende por `execution context` (contexto de execução), `lexical scope` (escopo léxico) e `closure` .

* Explique que é e para que serve `const` com um argumento diferente de “eu uso quando uma variável não muda seu valor".

* Se temos três `console.log` consecutivos, mas o segundo está dentro de um `setTimeout`, ele terminará impresso ao final de todos. Explique por quê.

```js
console.log('log 1');
setTimeout(() => console.log('log 2'), 0);
console.log('log 3');
```

* Qual é a diferença entre função como *sentença ou expressão*?

* Explique com um exemplo como manejar chamadas assíncronas *callbacks e promises*.

* Como você explicaria para sua mãe/pai o que é uma função? Por que usar uma função? Que exemplos você usaria para ilustrar o conceito?

* Em suas palavras, como explicaria:

    * Por que no JavaScript temos três palavras reservadas para declarar variáveis (`var`, `let` y `const`)?
    * Quais são as diferenças entre elas, com alguns exemplos?

* Explique, em suas palavras, o conceito de _iteração_ na programação.

* A que nos referimos quando falamos de valores _true_ e _false_ em JavaScript?

* Perguntas sobre métodos de arrays (`Array.prototype`). Aqui as possibilidades são múltiplas, por exemplo:
- Explique com um exemplo como `.map` é diferente de `.forEach`?
- Explique com um exemplo como `.map` é diferente de `.filter`?
- Explique com um exemplo como funciona o método `.reduce`?


## Node.js

* O que é Node.js e como se diferencia de JavaScript no navegador?

* Existe alguma diferença entre dependencies e devDependencies no arquivo package.json?

* No package.json, para que servem os scripts?

* O que é NPM? Como é usado?

* Você teve experiência usando os módulos FS e PATH? Para que serve cada um?

* Dado o servidor HTTP implementado com Node.js, você poderia explicar o que significa dizer que estamos *bloqueando o loop de eventos* (*event loop*) e o que podemos fazer para evitar o bloqueio?

  ```js
  const { createServer } = require('http');
  const { readFileSync } = require('fs');

  const server = createServer((req, resp) => {
    if (req.url === '/_') {
      // Blocking the event loop...
      return resp.end(readFileSync(__filename));
    }

    return resp.writeHead(404).end('Not found');
  });

  server.listen(3333);
  ```

* Dado o seguinte módulo de Node.js, e assumindo que `doSomethingAsync` seja uma função assíncrona que faz uso de um *callback* ao estilo de
Node.js, que problema você vê nessa implementação?

  ```js
  module.exports = (cb) => {
    doSomethingAsync('some-value', (err, data) => {
      if (err) {
        cb(new Error('OMG'));
      }
      cb(null, { ok: true });
    });
  };
  ```

## Docker

* O que é Docker?

* O que é uma imagem/contêiner no Docker?

* Para que serve o Docker Compose?

* Você poderia descrever algumas das partes típicas de um `docker-compose.yml`?

## ExpressJS

* O que é ExpressJS?

* O que é uma rota?

* O que é um middleware?

* Pode dar um exemplo de como agregar um middleware de forma global?

* Pode dar um exemplo de como agregar um middleware para uma única rota?

* O que é CORS?

* O que normalmente compõe um controller em ExpressJS?

* Você sabe o significado de CRUD?

* A que nos referimos quando falamos de um API REST ou RESTful?


## HTTP

* Como descreveria um request/response?

* O que são os Headers?

* O que é Body?

* Que verbos HTTP conhece e para quê são usados?

* Quais são os códigos de status e quais você conhece?

