from flask import Flask
import flask
from flask.flask_cors import CORS
from main import User, Strength

app = Flask(__name__)
CORS(app)


@app.route("/strength", methods=['GET', 'POST'])
def strength():
    return flask.jsonify({})


if __name__ == '__main__':
    app.run()
