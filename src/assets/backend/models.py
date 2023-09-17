"""Models for Application."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """Users"""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(60), unique=True)
    mobile = db.Column(db.Integer, unique=True)
    name = db.Column(db.String, nullable=False)
    property_id = db.Column(db.String(10))
    address_id = db.Column(db.String(10))
    username = db.Column(db.String(25))
    image = db.Column(db.String)
    password = db.Column(db.String(10))
    bio = db.Column(db.String(200))
    area = db.Column(db.Integer)
    buyer_id = db.Column(db.Integer)
    favorites = db.Column(db.String(10))


class Property(db.Model):
    """Properties"""

    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)


class Role(db.Model):
    """Mapping Users to Roles"""

    __tablename__ = 'roles'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)


class Favorite(db.Model):
    """Mapping Properties to Users [as favorites]"""

    __tablename__ = 'favorites'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
