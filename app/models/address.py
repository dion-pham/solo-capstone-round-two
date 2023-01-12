from .db import db, environment, SCHEMA, add_prefix_for_prod

class Address(db.Model):
    __tablename__ = 'addresses'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False )
    address1 = db.Column(db.String(100), nullable=False)
    address2 = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(75), nullable=False)
    state= db.Column(db.String(75), nullable=False)
    country = db.Column(db.String(75), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    phone = db.Column(db.String(25), nullable=False)

    # add relationship to users
    user = db.relationship('User', back_populates='address')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'address1': self.address1,
            'address2': self.address2,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'zip_code': self.zip_code,
            'phone': self.phone
        }
