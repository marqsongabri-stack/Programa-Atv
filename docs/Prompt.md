Role: Engenheiro de software sênior, com especialização em arquitetura de sistemas, engenharia de requisitos, modelagem UML, APIs REST, desenvolvimento full stack, UI/UX e testes de software.

Tarefa: Projetar e implementar um sistema web de lista de compras inteligente utilizando uma arquitetura moderna cliente-servidor. O sistema deve ser estruturado de forma completa, coerente e adequada para desenvolvimento em equipe e avaliação acadêmica.

Artefatos Obrigatórios Gerados:

* Prompt utilizado
* Documento de planejamento
* Documento da API
* Diagramas UML (com código e imagens)
* Código-fonte completo do sistema
* README
* Testes implementados
* Documentação de testes

DEFINIÇÕES TÉCNICAS (OBRIGATÓRIAS)

Tipo de sistema: aplicação web
Arquitetura: cliente-servidor em camadas (apresentação, controle, serviços, persistência)

Front-end:

* HTML
* CSS
* JavaScript (vanilla ou framework simples)

Back-end:

* Node.js com Express

Banco de dados:

* SQLite

Estilo de API:

* REST (JSON)

OBJETIVO DO SISTAEMA

Criar um sistema web de lista de compras inteligente que permita ao usuário organizar itens de compras de forma eficiente, categorizada e intuitiva.

O sistema deve facilitar o controle de compras domésticas, permitindo visualização clara, organização por categorias e acompanhamento do status dos itens.

UI/UX (OBRIGATÓRIO)

* Interface simples, intuitiva e responsiva
* Lista de compras organizada por categoria
* Botão de adicionar item em destaque
* Formulário com validação (nome, categoria obrigatórios)
* Feedback visual (sucesso, erro, loading, lista vazia)
* Indicadores visuais de status (comprado / não comprado)
* Filtros por categoria e status
* Ordenação (nome, categoria, status)
* Acessibilidade básica (labels, contraste, navegação simples)

REQUISITOS FUNCIONAIS

* Cadastrar item de compra
* Listar itens
* Visualizar item específico
* Editar item
* Excluir item
* Marcar item como comprado / não comprado
* Filtrar itens por categoria
* Filtrar por status (comprado / pendente)
* Ordenar itens

REGRAS DE NEGÓCIO

* Nome do item é obrigatório
* Categoria é obrigatória
* Não permitir itens duplicados na mesma categoria
* Status inicial deve ser "pendente"
* Categorias pré-definidas (Alimentos, Limpeza, Higiene, Bebidas, Hortifruti, Padaria, Outros)

MODELO DE DADOS (SUGERIDO)

Item:

* id (inteiro)
* nome (string)
* categoria (string)
* comprado (boolean)
* dataCriacao (datetime)

TESTES E DOCUMENTAÇÃO DE TESTES

* Testes unitários (services, validações)
* Testes de API (endpoints REST)
* Testes de interface (renderização e interação da UI)

Ferramentas:

* Jest
* Testing Library

A documentação de testes deve conter:

* Estratégia de testes
* Plano de testes
* Casos de teste
* Critérios de aceitação
* Cobertura de testes
* Rastreabilidade entre requisitos e testes

REQUISITOS ADICIONAIS

* Código organizado por camadas (controllers, services, repositories)
* Separação clara entre front-end e back-end
* Uso de boas práticas (clean code)
* Comentários explicativos quando necessário
* Estrutura pronta para evolução futura

RESULTADO ESPERADO

Um sistema completo de lista de compras inteligente, funcional, organizado, com interface web e arquitetura profissional, adequado para apresentação acadêmica e portfólio.
