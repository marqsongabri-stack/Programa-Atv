# 🔌 DOCUMENTO DA API
## Sistema: Lista de Compras Inteligente

---

## 🌐 URL BASE
http://localhost:3000/api/items

---

# 📦 RECURSO: ITEMS (Itens da Lista de Compras)

Este recurso representa os itens da lista de compras do sistema.

Cada item possui:
- id (identificador único)
- nome (nome do produto)
- categoria (categoria do produto)
- comprado (status: 0 ou 1)

---

# 📌 1. LISTAR TODOS OS ITENS

## 🔹 Endpoint
GET /api/items

## 🔹 Descrição
Retorna todos os itens cadastrados no sistema.

## 🔹 Resposta (200 OK)
```json
[
  {
    "id": 1,
    "nome": "Arroz",
    "categoria": "Alimentos",
    "comprado": 0
  },
  {
    "id": 2,
    "nome": "Detergente",
    "categoria": "Limpeza",
    "comprado": 1
  }
]
➕ 2. CRIAR ITEM
🔹 Endpoint

POST /api/items

🔹 Descrição

Cria um novo item na lista de compras.

🔹 Body (JSON)
{
  "nome": "Feijão",
  "categoria": "Alimentos"
}
🔹 Regras
nome é obrigatório
categoria é obrigatória
comprado inicia como 0 (false)
🔹 Resposta (201 Created)
{
  "id": 3
}
❌ 3. REMOVER ITEM
🔹 Endpoint

DELETE /api/items/:id

🔹 Descrição

Remove um item da lista pelo ID.

🔹 Exemplo

DELETE /api/items/1


🔄 4. ALTERAR STATUS (COMPRADO / PENDENTE)
🔹 Endpoint

PATCH /api/items/:id/toggle

🔹 Descrição

Alterna o status do item entre:

0 (pendente)
1 (comprado)

📊 5. MODELO DE DADOS
📦 ITEM
{
  "id": 1,
  "nome": "Arroz",
  "categoria": "Alimentos",
  "comprado": 0
}

🧠 6. REGRAS DE NEGÓCIO
O nome do item é obrigatório
A categoria é obrigatória
Não há duplicação por ID (auto incremento)
Status padrão: 0 (não comprado)
Alteração de status é feita por toggle

⚙️ 7. TECNOLOGIAS UTILIZADAS
Node.js
Express
SQLite
API REST
JSON

🔐 8. OBSERVAÇÕES TÉCNICAS
API sem autenticação (projeto acadêmico)
Comunicação via HTTP/JSON
Estrutura preparada para expansão futura:
login de usuários
múltiplas listas
sincronização em nuvem