"""Models for Application."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    """Users"""

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.Binary(60), nullable=False)
    name = db.Column(db.String(255), nullable=False, unique=True)
    property_id = db.Column(db.String(255))
    # favorites = db.Column(db.String)

    def to_dict(self):
        """Return object data in easily serializable format"""
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'password': self.password
        }


class Property(db.Model):
    """Properties"""

    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    city = db.Column(db.String, nullable=False)
    street = db.Column(db.String, nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    prop_type = db.Column(db.String)
    beds = db.Column(db.Integer)
    baths = db.Column(db.Integer)
    sqft = db.Column(db.Integer)
    agent_email = db.Column(db.String)
    state_code = db.Column(db.String)


######## FUTURE FUNCTION ########
# class Favorite(db.Model):
#     """Mapping Properties to Users [as favorites]"""

#     __tablename__ = 'favorites'

#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)

def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
