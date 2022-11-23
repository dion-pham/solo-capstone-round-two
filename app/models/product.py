from .db import db, environment, SCHEMA, add_prefix_for_prod
from .purchase import purchase_product

# purchase_product = db.Table(
#     'purchase_product',
#     db.Column('product_id', db.Integer, db.ForeignKey(add_prefix_for_prod('products.id'))),
#     db.Column('purchase_id', db.Integer, db.ForeignKey(add_prefix_for_prod('purchases.id')))
# )



class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    size = db.Column(db.String(25))
    description = db.Column(db.String(200),nullable=False)
    category = db.Column(db.String(25), nullable=False)
    price = db.Column(db.Float(10), nullable=False)
    img_url1 = db.Column(db.String, nullable=False)
    img_url2 = db.Column(db.String, nullable=False)
    img_url3 = db.Column(db.String, nullable=False)

    purchases = db.relationship('Purchase',
                            secondary = purchase_product,
                            back_populates = 'products',
                            lazy=False
    )


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'size': self.size,
            'description': self.description,
            'category': self.category,
            'price': self.price,
            'img_url1': self.img_url1,
            'img_url2': self.img_url2,
            'img_url3': self.img_url3,
        }
