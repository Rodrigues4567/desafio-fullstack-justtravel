from flask import Flask, jsonify, request
from flask_cors import CORS
from models import Session, Task

# Inicialização
app = Flask(__name__)
CORS(app)

# Rotas
@app.route("/tasks", methods=['GET'])
def get_tasks():
    session = Session()
    tasks = session.query(Task).all()
    result = [{'id': t.id, 'title': t.title, 'completed': t.completed} for t in tasks]
    session.close()
    return jsonify(result)

@app.route("/tasks", methods=['POST'])
def add_task():
    return

# Execução
if __name__ == '__main__':
    app.run(debug=True)
