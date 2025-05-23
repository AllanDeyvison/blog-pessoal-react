# Blog Pessoal React - Documentação do Projeto

## Visão Geral

Este projeto é um blog pessoal desenvolvido em React, consumindo uma API RESTful para gerenciar postagens e temas. O sistema permite criar, listar, editar, visualizar e deletar posts e temas.

---

## Passo a Passo da Criação da API

1. **Configuração do Backend (API)**
   - Utilização de Node.js com Express para criar a API.
   - Configuração do banco de dados relacional  MySQL.
   - Criação das tabelas `tema` e `postagem` com relacionamento (chave estrangeira).
   - Implementação das rotas REST:
     - `GET /tema` - Lista todos os temas.
     - `GET /tema/:id` - Detalha um tema.
     - `POST /tema` - Cria um novo tema.
     - `PUT /tema/:id` - Atualiza um tema existente.
     - `DELETE /tema/:id` - Remove um tema.
     - `GET /posts` - Lista todas as postagens.
     - `GET /posts/:id` - Detalha uma postagem.
     - `POST /posts` - Cria uma nova postagem.
     - `PUT /posts/:id` - Atualiza uma postagem existente.
     - `DELETE /posts/:id` - Remove uma postagem.
   - Implementação do CORS para permitir requisições do frontend.

2. **Testes da API**
   - Testes das rotas utilizando o Postman 
   - Validação dos dados enviados e recebidos.

---

## Principais Características do Projeto React

- **Estrutura de Componentes**
  - Separação dos componentes por domínio: `post` e `tema`.
  - Componentes para CRUD completo de posts e temas.

- **Integração com a API**
  - Utilização do Axios para requisições HTTP.
  - Consumo das rotas da API para listar, criar, editar e deletar dados.

- **Navegação**
  - Uso do React Router DOM para navegação entre páginas.
  - Rotas para cada operação (listar, adicionar, editar, visualizar).

- **Estilização**
  - Uso do Bootstrap para estilização dos componentes e tabelas.

- **Boas Práticas**
  - Utilização de hooks (`useState`, `useEffect`, `useNavigate`, `useParams`).
  - Separação de responsabilidades entre componentes.
  - Feedback visual para o usuário após operações.

---

## Como Executar o Projeto

1. **Backend**
   - Instale as dependências e execute o servidor da API (Node.js/Express).
   - Certifique-se de que o banco de dados está configurado e rodando.

2. **Frontend**
   - Instale as dependências com `npm install`.
   - Execute o projeto com `npm start`.
   - Acesse `http://localhost:3000` no navegador.
