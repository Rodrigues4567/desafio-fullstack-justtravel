from flask import Flask, jsonify, request
from flask_cors import CORS
from models import Session, Task

# Inicialização
app = Flask(__name__)
CORS(app)

# Rotas

# Exibe as tarefas
@app.route("/tasks", methods=['GET'])
def get_tasks():
    session = Session()
    tasks = session.query(Task).all()
    result = [{'id': t.id, 'title': t.title, 'completed': t.completed} for t in tasks]
    session.close()
    return jsonify(result)

# Cria tarefas
@app.route("/tasks", methods=['POST'])
def add_task():
    data = request.get_json()
    session = Session()
    new_task = Task(
        title=data['title'],
        completed=data.get('completed', False)
    )
    session.add(new_task)
    session.commit()
    session.close()
    return jsonify({'message': 'Task added'}), 201

# Atualiza a tarefa
@app.route("/tasks/<int:id>", methods=['PUT'])
def update_task(id):
    session = Session()
    task = session.query(Task).get(id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404
    data = request.get_json()
    task.title = data.get('title', task.title)
    task.completed = data.get('completed', task.completed)
    session.commit()
    session.close()
    return jsonify({'message': 'Task updated'})

# Apagar tarefa
@app.route("/tasks/<int:id>", methods=['DELETE'])
def delete_task(id):
    session = Session()
    task = session.query(Task).get(id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404
    session.delete(task)
    session.commit()
    session.close()
    return jsonify({'message': 'Task deleted'})

# Execução
if __name__ == '__main__':
    app.run(debug=True)
