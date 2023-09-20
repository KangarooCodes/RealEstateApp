from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import bcrypt
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Property


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///real-estate-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

db.init_app(app)
connect_db(app)
db.create_all()

app.config['SECRET_KEY'] = "joeyssecret"

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route('/api')
def index():
    return ()


@app.route('/api/register', methods=['GET', 'POST', "OPTIONS"])
def register():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    name = request.json.get('name', None)

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
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")

    email = request.json.get('email', None)
    password = request.json.get('password', None)

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


@app.route('/api/users')
def get_users():
    users = User.query.all()
    users_json = [user.to_dict() for user in users]
    print(users_json)
    return jsonify(users_json)
