from flask import Flask, render_template
from random import *
from flask_cors import CORS

app = Flask(__name__,
            static_folder = "../dist/static",
            template_folder = "../dist")
cors = CORS(app, resources={"/api/*": {"origins":"*"}})

@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")
