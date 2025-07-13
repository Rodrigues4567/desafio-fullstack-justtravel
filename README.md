# To-Do List - Desafio Full-stack Just Travel

## Sobre o Projeto
Este é um projeto Full Stack de uma aplicação de tarefas (To-Do App), a ideia é ter um CRUD onde é possível:

✅ Criar tarefas

✅ Listar todas as tarefas

✅ Marcar como concluída ou não concluída

✅ Editar o título da tarefa

✅ Excluir tarefa

## 🖥️ Tecnologias utilizadas

🚀 Frontend

- React.js + Vite

- TailwindCSS

- Axios

🔥 Backend

- Python

- Flask

- SQLAlchemy

- SQLite (como banco de dados local)

- Flask-CORS

☁️ Deploy

- Frontend hospedado na Vercel

- Backend hospedado na Render

## 🌐 Link do projeto em produção
- Frontend: https://todo-frontend-alpha-six.vercel.app/

## ⚙️ Como executar o projeto localmente (2° opção)
🔽 Clone o repositório
```bash
git clone https://github.com/seu-usuario/desafio-fullstack-justtravel.git
cd desafio-fullstack-justtravel
```

Este projeto possui duas partes:  
✅ **Backend** (Flask)  
✅ **Frontend** (React + Vite)

---

### 🔥 Backend (Flask)

1. Abra o terminal e navegue até a pasta do backend:

```bash
cd backend
```

2. (Opcional, mas recomendado) Crie e ative um ambiente virtual:

```bash
# Windows
python -m venv venv
venv\Scripts\activate
```

3. Instale as dependências do projeto:

```bash
pip install -r requirements.txt
```

4. Rode o servidor Flask:

```bash
python app.py
```

### ⚛️ Frontend (React)

1. Abra outro terminal e navegue até a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```
✅ O frontend estará disponível em http://localhost:5173 (ou na porta que o Vite informar).

### 📝 Observações importantes

- Para testar localmente, no código React (em frontend/src/pages/Home/index.jsx), altere a URL da API para:

```bash
await axios.get('http://127.0.0.1:5000/tasks')
```
caso ainda esteja apontando para a URL da Render.

## Imagens
<img width="1919" height="1024" alt="Captura de tela 2025-07-13 034441" src="https://github.com/user-attachments/assets/d1b0254a-8a11-492b-89b5-ad66b5d5f6de" />

<img width="362" height="741" alt="Captura de tela 2025-07-13 034505" src="https://github.com/user-attachments/assets/450c4157-2f3a-434c-a0e7-2f1cf2dfe1ed" />
