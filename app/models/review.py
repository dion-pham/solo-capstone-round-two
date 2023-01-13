from .db import db, environment, SCHEMA, add_prefix_for_prod
import datetime
import json

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)
    message = db.Column(db.String(255), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)

    product = db.relationship('Product', back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'message': self.message,
            'rating': self.rating,
            'createdAt': json.dumps(self.createdAt, default=str),
            'updatedAt': json.dumps(self.updatedAt, default=str),
            'user': self.user.to_dict()
        }
