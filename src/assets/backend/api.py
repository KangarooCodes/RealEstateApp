from flask import Flask, render_template, session, make_response
from flask_bcrypt import Bcrypt
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db


app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///real-estate-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)
db.create_all()

app.config['SECRET_KEY'] = "joeyssecret"

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)


@app.route('/')
def index():
    session['username'] = 'TestUsername1'
    session['leaderboard'] = ['TopScore', 'SecondScore', 'ThirdScore']
    return render_template("index.html")


@app.route('/api/users')
def get_users():
    return 'Users'
