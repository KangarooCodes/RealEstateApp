import logging
from flask import Flask, jsonify, request
from flask_cors import CORS
import bcrypt
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///real-estate-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
# app.config['CORS_HEADERS'] = 'Content-Type'

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

db.init_app(app)
connect_db(app)
db.create_all()

app.debug = True
app.config['SECRET_KEY'] = "joeyssecret"

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True
debug = DebugToolbarExtension(app)


@app.route('/api')
def index():
    return ()


@app.route('/api/register', methods=['GET', 'POST', "OPTIONS"])
def register():
    email = request.json.get('email')
    password = request.json.get('password')
    name = request.json.get('name')

    if not email:
        return 'Missing Email!', 400
    if not password:
        return 'Missing Password!', 400
    if not name:
        return 'Missing Name!', 400

    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user = User(email=email, password=hashed, name=name)

    db.session.add(user)
    db.session.commit()

    return f"Welcome {name}!"


@app.route('/api/login', methods=['POST'])
def login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        if not email:
            return 'Missing Email!', 400
        if not password:
            return 'Missing Password!', 400

        user = User.query.filter_by(email=email).first()

        if not user:
            return 'User Not Found', 404
        if bcrypt.checkpw(password.encode('utf-8'), user.password):
            return 'Welcome Back !'
        else:
            return 'Wrong Password, Try Again'

    except:
        print('******* CUSTOM ERROR *******')
    finally:
        print('Something Else Went Wrong')


@app.route('/api/users')
def get_users():
    users = User.query.all()
    users_json = [user.to_dict() for user in users]
    print(users_json)
    return jsonify(users_json)
