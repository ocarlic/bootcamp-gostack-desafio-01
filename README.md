<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<blockquote align="center">“Sua única limitação é você mesmo”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## Iniciar o projeto

Para iniciar o projeto basta clonar o repositório 

```
git@github.com:ocarlic/bootcamp-gostack-desafio-01.git
```

Em seguida entrar no diretório clonado e executar `yarn install` e depois `yarn dev` para executar a aplicação.

## :rocket: Sobre o desafio

Foi criado uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

`POST /projects`: 
  - Adiciona um novo projeto

`GET /projects`: 
  - Mostra todos os projetos cadastrados

`PUT /projects/:id`: 
  - Edita um projeto já cadastrado

`DELETE /projects/:id`: 
  - Deleta um projeto cadastrado

`POST /projects/:id/tasks`: 
  - Adiciona um nome para task do projeto

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
