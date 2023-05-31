<h1 align="center"> Bem Vindo ao Food Explorer </h1>

<p align="center"> Cardápio digital para restaurante fictício </p>

## 💻 Sobre:

O aplicativo que foi desenvolvido como Desafio Final da trilha Explorer, é um cardápio digital para um restaurante fictício, conhecido como Food Explorer.
Neste desafio foram abordados os seguintes temas:

- React;
- Routes;
- components;
- Props;
- hooks;
- context;

---

## Funcionalidades

O Food Explorer tem duas personas: o admin e o usuário;

O admin é a pessoa responsável pelo restaurante, logo, poderá criar, visualizar, editar e apagar um prato a qualquer momento. Cada prato deve conter uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço. Ao clicar em adicionar prato, o admin receberá uma mensagem de sucesso e será redirecionado para a página principal;

O usuário irá visualizar todos os pratos cadastrados e, quando clicar em um prato, será redirecionado para uma nova tela com informações mais detalhadas sobre ele.

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/zBlom2eTiTuCgGuSIT7l0V/food-explorer-v2-(Community)?type=design&node-id=201-1532&t=aV5VX0KoXZYu15xv-0">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

## 🚀 Como executar o projeto.

Este projeto é divido em duas partes:

1. Backend (API)
2. Frontend

💡O Backend deve estar rodando em sua máquina para que o frontend seja reenderizado.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/rheineck/FoodExplorer.git

# Acesse a pasta do projeto no terminal/cmd
$ cd server

# Instale as dependências
$ npm install

# Execute as migration
$ npm migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Login do admin
$ email: admin@admin.com
$ password: admin

# O servidor inciará na porta:3334 - acesse <http://localhost:3334>
```

#### 🎲 Rodando a aplicação (Frontend)

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd web

# Instale as dependências com:
$ npm install

# Rode a aplicação em modo de desenvolvimento:
$ npm run dev

```

---

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- Node.js
- React.js

---

## Deploy do projeto.

https://foodexplorer-rgh.netlify.app/

---

## 📝 License

This project is under the license [MIT](./LICENSE).

---
