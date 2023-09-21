from flask import Flask, jsonify, request, make_response, session, redirect
from flask_cors import CORS
import bcrypt
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User
from flask_session import Session
from datetime import timedelta
app = Flask(__name__)

CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///real-estate-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "joeyssecret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.app_context().push()
Session(app)

debug = DebugToolbarExtension(app)
connect_db(app)


@app.route('/api/register', methods=['POST'])
def register():
    email = request.json.get("email")
    password = request.json.get("password")
    username = request.json.get("username")

    if not email or not password or not username:
        return jsonify("Form Not Complete"), 400

    hashed = bcrypt.hashpw(password.encode(
        'utf-8'), bcrypt.gensalt()).decode('utf-8')
    user = User(email=email, password=hashed, username=username)

    try:
        db.session.add(user)
        db.session.commit()

        response = {
            "success": False,
            "username": username
        }
        response['success'] = True
        return jsonify(response)

    except Exception as err:
        res = '{"error": "Registration error"}'
        print(err)
        return jsonify(res)


@app.route('/api/login', methods=['POST'])
def login():
    try:
        username = request.json.get("username")
        password = request.json.get("password")
        # record the users email in session
        session["username"] = username

        response = {
            "success": False,
            "username": username
        }

        if not username or not password:
            return jsonify("Form Not Complete"), 400

        user = User.query.filter_by(username=username).first()

        if not user:
            return jsonify("User Not Found"), 404

        if bcrypt.checkpw(password.encode('utf8'), user.password.encode('utf-8')):
            print('********************************')
            print('Login successful')
            print('********************************')
            response['success'] = True
            return jsonify(response)
        else:
            return make_response(jsonify('Username and Password did not match'), 401)

    except Exception as err:
        print('********************************')
        print(err)
        return jsonify('Error Happened'), 400


@app.route('/api/users')
def get_users():
    users = User.query.all()
    users_json = [user.to_dict() for user in users]
    return jsonify(users_json)
