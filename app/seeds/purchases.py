from app.models import db, SCHEMA, environment
from app.models.purchase import Purchase

def seed_purchases():
    demo_purchase_1= Purchase(
        user_id = 1,
        pretax_total_price = 250,
        shipping_instructions = 'Please leave out by the front door'
    )
    db.session.add(demo_purchase_1)
    db.session.commit()

def undo_purchases():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.purchases RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM purchases')
    db.session.commit()
