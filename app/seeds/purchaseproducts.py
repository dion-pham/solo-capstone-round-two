from app.models import db, SCHEMA, environment
from app.models.purchase_product import PurchaseProduct

def seed_purchaseproducts():
    demo_purchaseproduct_1 = PurchaseProduct(
        product_id = 1,
        purchase_id = 1,
        quantity = 2,
        size = 'Small'
    )
    demo_purchaseproduct_2 = PurchaseProduct(
        product_id = 2,
        purchase_id = 1,
        quantity = 1,
        size = 'Medium'
    )
    demo_purchaseproduct_3 = PurchaseProduct(
        product_id = 3,
        purchase_id = 1,
        quantity = 1,
        size = 'Medium'
    )
    demo_purchaseproduct_4 = PurchaseProduct(
        product_id = 18,
        purchase_id = 2,
        quantity = 1,
        size = 'Medium'
    )
    demo_purchaseproduct_5 = PurchaseProduct(
        product_id = 19,
        purchase_id = 2,
        quantity = 1,
        size = 'Medium'
    )
    demo_purchaseproduct_6 = PurchaseProduct(
        product_id = 24,
        purchase_id = 2,
        quantity = 1
    )
    db.session.add(demo_purchaseproduct_1)
    db.session.add(demo_purchaseproduct_2)
    db.session.add(demo_purchaseproduct_3)
    db.session.add(demo_purchaseproduct_4)
    db.session.add(demo_purchaseproduct_5)
    db.session.add(demo_purchaseproduct_6)
    db.session.commit()

def undo_purchaseproducts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.purchaseproducts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM purchaseproducts')
    db.session.commit()
