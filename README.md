# API de Livros (Node.js + Express + MongoDB)

## Executar localmente
```bash
npm install
cp .env.example .env   # edite MONGODB_URI com a string do Atlas
npm run dev
```

## Rotas
| Método | Rota | Ação |
|---|---|---|
| GET | /livros | Lista livros |
| GET | /livros/:id | Busca um livro |
| POST | /livros | Cria um livro |
| PUT | /livros/:id | Atualiza um livro |
| DELETE | /livros/:id | Exclui um livro |

## Exemplo de JSON
```json
{ "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899, "lido": true }
```

## Deploy no Render
Build Command: `npm install` · Start Command: `npm start`
Variável de ambiente: `MONGODB_URI` (string do Atlas).
