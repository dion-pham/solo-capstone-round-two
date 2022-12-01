from app.models import db, SCHEMA, environment
from app.models.product import Product



def seed_products():
    demo_product_1 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_2 = Product(
        name = "Lightweight Woven Button Down",
        description = "Female Model: Height 5'2 Wearing Size SMALL.",
        category = 'Tops',
        price = 54.00,
        img_url1 = "https://i.imgur.com/VwLn7Jq.png",
        img_url2 = "https://i.imgur.com/kej2JB7.png",
        img_url3 = "https://i.imgur.com/Cxi4AAe.png"
    )
    demo_product_3 = Product(
        name = "R2 Cube Tee",
        description = "Male Model is 6'1 and is wearing Size LARGE!",
        category = 'Tops',
        price = 42.00,
        img_url1 = "https://i.imgur.com/t09TV6c.png",
        img_url2 = 'https://i.imgur.com/zynRN26.png',
        img_url3 = 'https://i.imgur.com/PDx964W.png'
    )
    demo_product_4 = Product(
        name = "SKY HIGH TIE DYE TEE",
        description = "Creating our own blank was something key to us when relaunching the brand! The Sky High Tie Dye Tee features a puff print front logo and single stitched sleeves, collar and bottom hem.",
        category = 'Tops',
        price = 55.00,
        img_url1 = "https://i.imgur.com/ZwIgPMh.png",
        img_url2 = "https://i.imgur.com/D9217BR.png",
        img_url3 = "https://i.imgur.com/9oJInNU.png"
    )
    demo_product_5 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_6 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_7 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_8 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_9 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_10 = Product(
        name = "Speed Turtle Ringer Tee",
        description = "Model is 5'9 and wearing a Size LARGE Tee.",
        category = 'Tops',
        price = 40.00,
        img_url1 = "https://i.imgur.com/KttL2p7.png",
        img_url2 = "https://i.imgur.com/5JMIu95.png",
        img_url3 = "https://i.imgur.com/hzg50jS.png"
    )
    demo_product_11 = Product(
        name = "Speed Turtle Track Pant",
        description = "Model is 5'9 and wearing a Size LARGE Pants.",
        category = 'Bottoms',
        price = 75.00,
        img_url1 = "https://i.imgur.com/K2gVuKB.png",
        img_url2 = "https://i.imgur.com/19B6Eir.png",
        img_url3 = "https://i.imgur.com/khwPasY.png"
    )
    demo_product_12 = Product(
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
    db.session.add(demo_product_4)
    db.session.add(demo_product_5)
    db.session.add(demo_product_6)
    db.session.add(demo_product_7)
    db.session.add(demo_product_8)
    db.session.add(demo_product_9)
    db.session.add(demo_product_10)
    db.session.add(demo_product_11)
    db.session.add(demo_product_12)

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
