from .db import db, environment, SCHEMA, add_prefix_for_prod


# purchase_product = db.Table(
#     'purchase_product',
#     db.Column('product_id', db.Integer, db.ForeignKey(add_prefix_for_prod('products.id'))),
#     db.Column('purchase_id', db.Integer, db.ForeignKey(add_prefix_for_prod('purchases.id')))
# )

# if environment == "production":
#     purchase_product.schema = SCHEMA

class Purchase(db.Model):
    __tablename__ = 'purchases'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    pretax_total_price = db.Column(db.Float(10))
    shipping_instructions = db.Column(db.String(100))

    user_purchases = db.relationship('User', back_populates='purchase_users')
    # products = db.relationship('Product',
    #                         secondary=purchase_product,
    #                         back_populates='purchases',
    #                         lazy = False
    # )
    purchase_join = db.relationship('PurchaseProduct', back_populates='purchases', lazy=False, cascade='all,delete')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'pretax_total_price': self.pretax_total_price,
            'shipping_instructions': self.shipping_instructions,
            'purchase_join': [ind_purchase.to_dict() for ind_purchase in self.purchase_join]
            # 'products': [ind_product.to_dict() for ind_product in self.products]
            # iterate through products purchased, then total up the price to display in the frontend
        }
