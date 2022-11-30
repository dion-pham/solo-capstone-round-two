from .db import db, environment, SCHEMA, add_prefix_for_prod

class PurchaseProduct(db.Model):
    __tablename__ = 'purchaseproducts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))
    purchase_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('purchases.id')))
    quantity = db.Column(db.Integer, nullable=False)
    size = db.Column(db.String, nullable=False)

    products = db.relationship('Product', back_populates='product_join', lazy=False)
    purchases = db.relationship('Purchase', back_populates='purchase_join', lazy=False)

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'purchase_id': self.purchase_id,
            'quantity': self.quantity,
            'size': self.size,
            'product_details': self.products.to_dict()
        }
