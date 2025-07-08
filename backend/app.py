from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return 'Fala ai, chama'

app.run(debug=True)