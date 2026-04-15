# 📘 Documento de Planejamento
## Sistema: Lista de Compras Inteligente

---

## 🧠 1. Visão Geral

O sistema "Lista de Compras Inteligente" é uma aplicação web que permite ao usuário organizar itens de compras domésticas de forma simples, categorizada e eficiente.

O objetivo é facilitar o controle de compras por meio de uma interface intuitiva, com funcionalidades de cadastro, edição, remoção e filtragem de itens.

---

## 🎯 2. Objetivos do Sistema

- Permitir o gerenciamento de itens de compras
- Organizar itens por categorias
- Permitir marcação de itens como comprados
- Oferecer filtros por categoria e status
- Garantir persistência de dados em banco SQLite
- Disponibilizar API REST para comunicação com o frontend

---

## 👤 3. Público-alvo

- Estudantes
- Famílias
- Usuários que desejam organizar compras domésticas

---

## 🏗 4. Arquitetura do Sistema

O sistema segue arquitetura em camadas:

### 🔹 Camada de Apresentação (Frontend)
- HTML
- CSS
- JavaScript

### 🔹 Camada de Controle (Backend)
- Node.js
- Express

### 🔹 Camada de Serviço (Regras de negócio)
- Validações
- Processamento de dados

### 🔹 Camada de Persistência
- SQLite (banco de dados local)

---

## 🧩 5. Funcionalidades

### ✔ Funcionais
- Adicionar item
- Listar itens
- Remover item
- Marcar como comprado
- Filtrar por categoria
- Filtrar por status

### ❌ Não funcionais
- Interface simples e responsiva
- Baixa complexidade de uso
- Execução local

---

## 🗂 6. Categorias do Sistema

- Alimentos  
- Hortifruti  
- Bebidas  
- Limpeza  
- Higiene  
- Padaria  

---

## 📦 7. Modelo de Dados

### Entidade: Item

| Campo      | Tipo    | Descrição                  |
|------------|--------|----------------------------|
| id         | INTEGER | Identificador único        |
| nome       | TEXT    | Nome do item               |
| categoria  | TEXT    | Categoria do item          |
| comprado   | BOOLEAN | Status do item             |

---

## 🔄 8. Fluxo do Sistema

1. Usuário abre a aplicação
2. Frontend solicita dados à API
3. Backend consulta banco SQLite
4. Dados são retornados em JSON
5. Interface é renderizada
6. Usuário interage (CRUD)
7. Dados são atualizados no banco

---

## 🧪 9. Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- SQLite