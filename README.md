

# API de Currículos – Node.js

API REST desenvolvida com Node.js e Express para gerenciamento de currículos, seguindo arquitetura limpa e boas práticas.

---

## 🚀 Tecnologias & Stack

- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**
- **Docker / Docker Compose**
- **JavaScript ou TypeScript (dependendo do projeto)**

---

## 📌 Funcionalidades

- CRUD completo de currículos  
- Arquitetura em camadas  
- ORM com Prisma  
- Banco de dados relacional  
- Docker para ambiente reprodutível  

---

## 🗂 Estrutura do Projeto

src/
├── controllers
├── services
├── repositories
├── prisma
└── routes
Dockerfile
docker-compose.yml

yaml
Copiar código

---

## ▶️ Como Rodar

### Rodar com Docker

docker compose up --build
Rodar localmente
bash
Copiar código
npm install
npm run dev
📄 Endpoints (exemplo)
bash
Copiar código
GET /curriculos
POST /curriculos
PUT /curriculos/:id
DELETE /curriculos/:id

## Autor
Thiago Espinoza
Desenvolvedor Full Stack
GitHub: https://github.com/thiagolemos23
