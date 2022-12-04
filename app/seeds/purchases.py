from app.models import db, SCHEMA, environment
from app.models.purchase import Purchase

def seed_purchases():
    demo_purchase_1= Purchase(
        user_id = 1,
        pretax_total_price = 176,
        shipping_instructions = 'Please leave by the front door'
    )
    demo_purchase_2= Purchase(
        user_id = 1,
        pretax_total_price = 620,
        shipping_instructions = 'Beware of dog'
    )
    db.session.add(demo_purchase_1)
    db.session.add(demo_purchase_2)
    db.session.commit()

def undo_purchases():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.purchases RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM purchases')
    db.session.commit()
