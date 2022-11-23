from app.models import db, SCHEMA, environment
from app.models.product import Product
from app.models.purchase import Purchase


def seed_products():
    demo_product_1 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/xYzNFwu.png",
        img_url2 = "https://i.imgur.com/slf8n4X.png",
        img_url3 = "https://i.imgur.com/khwPasY.png"
    )

    db.session.add(demo_product_1)

    demo_purchase_1 = Purchase(
        user_id = 1,
        total_price = 40.00
        # ask about this...
    )

    db.session.add(demo_purchase_1)

    demo_purchase_1.append(demo_product_1)
    demo_purchase_1.append(demo_product_1)
    demo_purchase_1.append(demo_product_1)

    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM products')

    db.session.commit()
