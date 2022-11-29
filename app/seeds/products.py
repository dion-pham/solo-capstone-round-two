from app.models import db, SCHEMA, environment
from app.models.product import Product



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
    demo_product_2 = Product(
        name = "Speed Turtle Track Pant",
        description = "Model is 5'9 and wearing a Size LARGE Pants.",
        category = 'Bottoms',
        price = 75.00,
        img_url1 = "https://i.imgur.com/K2gVuKB.png",
        img_url2 = "https://i.imgur.com/19B6Eir.png",
        img_url3 = "https://i.imgur.com/khwPasY.png"
    )
    demo_product_3 = Product(
        name = "Rainbow Zip Hoodie",
        description = "Model is 5'9 and wearing a Size LARGE Hoodie.",
        category = 'Outerwear',
        price = 90.00,
        img_url1 = "https://i.imgur.com/ItaLeyT.png",
        img_url2 = "https://i.imgur.com/xBpUNrq.png",
        img_url3 = "https://i.imgur.com/khwPasY.png"
    )
    db.session.add(demo_product_1)
    db.session.add(demo_product_2)
    db.session.add(demo_product_3)

    # demo_purchase_1 = Purchase(
    #     user_id = 1,
    #     # pretax_total_price = 245.00,
    #     shipping_instructions = 'Please leave out by the front door'
    # )

    # db.session.add(demo_purchase_1)

    # demo_purchase_1.products.append(demo_product_1)
    # demo_purchase_1.products.append(demo_product_1)
    # demo_purchase_1.products.append(demo_product_2)
    # demo_purchase_1.products.append(demo_product_3)

    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
        # db.session.execute(
        #     f"TRUNCATE table {SCHEMA}.purchases RESTART IDENTITY CASCADE;")
        # db.session.execute(
        #     f"TRUNCATE table {SCHEMA}.purchase_product RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM products')
        # db.session.execute('DELETE FROM purchases')
        # db.session.execute('DELETE FROM purchase_product')
    db.session.commit()
