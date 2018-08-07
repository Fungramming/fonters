from flask import Flask, request, jsonify
from flask_cors import CORS
from tinydb import TinyDB, Query

application = Flask(__name__)
app = application
cors = CORS(app, resources={"*": {"origins":"*"}})

@app.route('/', methods=['PUT'])
def save_email():
  try:
    name, email = request.get_json().get('name'), request.get_json().get('email')
    print(name, email)
    db = TinyDB('db.json')
    db.insert({'name': name, 'email': email})
    return jsonify({'result': 'success'}), 201
  except:
    return jsonify({'result': 'error'}), 401
