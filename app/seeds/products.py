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
        name = "TREE RUNNER GRAPHIC TEE",
        description = "The Tree Runner Tee graphic was created by our very own Thor Kimmel from Round Two Vintage New York. Featuring a screen printed graphic and an embroidered patch on left sleeve.",
        category = 'Tops',
        price = 42.00,
        img_url1 = "https://i.imgur.com/UMTD1gA.png",
        img_url2 = "https://i.imgur.com/MWYRQd1.png",
        img_url3 = "https://i.imgur.com/LS8vJuf.png"
    )
    demo_product_6 = Product(
        name = "Potato Chip Terry Cloth Beach Shirt",
        description = "For this collection we took inspiration from a few favorite vintage pieces out of our extensive private archive. Feeding into the vibe of Malibu and Surf Culture in California during the 70’s and 80’s. These Beach Shirts are fully constructed using a heavyweight Terry Cloth and feature big front pockets to keep your chips close.",
        category = 'Tops',
        price = 150.00,
        img_url1 = "https://i.imgur.com/zeGR7RD.png",
        img_url2 = "https://i.imgur.com/KJUasbQ.png",
        img_url3 = "https://i.imgur.com/BG5BIDA.png"
    )
    demo_product_7 = Product(
        name = "Speed Turtle Track Pant",
        description = "Model is 5'9 and wearing a Size LARGE Pants.",
        category = 'Bottoms',
        price = 75.00,
        img_url1 = "https://i.imgur.com/W2iRn1t.png",
        img_url2 = "https://i.imgur.com/KVz4E3a.png",
        img_url3 = "https://i.imgur.com/GTRhqSD.png"
    )
    demo_product_8 = Product(
        name = "Poly Twill Avalanche Pant",
        description = "Our V2 Avalanche Pants feature a new cuff enclosure that you can cinch up or wear loosely. We did away with the side zippers, as well as the rubber patches. The Cotton Twill pair has a hidden drawstring and the Poly Twill has it visible on the outside of the pants. Another difference between the two can be seen on the Cargo Pockets. The Cotton Twill pants have a button enclosure and the Poly Twill have a zipper pocket that is reminiscent of our V1 Avalanche Pants. ",
        category = 'Bottoms',
        price = 160.00,
        img_url1 = "https://i.imgur.com/LFKOBKe.png",
        img_url2 = "https://i.imgur.com/pbj6N2O.png",
        img_url3 = "https://i.imgur.com/IVforZ8.png"
    )
    demo_product_9 = Product(
        name = "Hiking Shorts",
        description = "Our Hiking Shorts have some familiar features that carried over from the pants. (Draw string/internal belt, External Pockets, Rubber Patches, Embroidered Heart Patch).",
        category = 'Bottoms',
        price = 100.00,
        img_url1 = "https://i.imgur.com/QeM85Ng.png",
        img_url2 = "https://i.imgur.com/zWQaVhE.png",
        img_url3 = "https://i.imgur.com/glYJkMi.png"
    )
    demo_product_10 = Product(
        name = "AVALANCHE PANTS",
        description = "Our fan favorite Hiking Pants are back with an updated fit and higher quality materials! Featuring two back pockets, a rubber patch, two knit patches, chalk pockets, and zippers up the legs for easy boot tying. Based on a pair of 1980s hiking pants..",
        category = 'Bottoms',
        price = 150.00,
        img_url1 = "https://i.imgur.com/5kBJ9JN.png",
        img_url2 = "https://i.imgur.com/lKJ4cwx.png",
        img_url3 = "https://i.imgur.com/ZwbG30P.png"
    )
    demo_product_11 = Product(
        name = "Khaki Rugged Desert Eagle Double Knee Pant",
        description = "Durable Cotton Canvas, Round Two & LRG Collaborative Label Patches and Artwork, Contrast Double Knee Detailing, Signature LRG Crossed Beltloop, Rivets on Knees and Back Pockets for Reinforcement, Hammer Loop Details, Baggy Fit, Branded Round Two Shank Button.",
        category = 'Bottoms',
        price = 180.00,
        img_url1 = "https://i.imgur.com/2p4z04P.png",
        img_url2 = "https://i.imgur.com/i5A2oKa.png",
        img_url3 = "https://i.imgur.com/J7rZER9.png"
    )
    demo_product_12 = Product(
        name = "AVALANCHE PANTS - CC",
        description = """
        Our fan favorite Hiking Pants are back with an updated fit and higher quality materials! Featuring two back pockets, a rubber patch, two knit patches, chalk pockets, and zippers up the legs for easy boot tying. Based on a pair of 1980s hiking pants.

        ComplexCon Exclusive!

        FEATURES OUR NEW STORES LOGO
        """,
        category = 'Bottoms',
        price = 160.00,
        img_url1 = "https://i.imgur.com/Z8weUJX.png",
        img_url2 = "https://i.imgur.com/XlI881L.png",
        img_url3 = "https://i.imgur.com/akR9V9e.png"
    )
    demo_product_13 = Product(
        name = "Rainbow Zip Hoodie",
        description = "Model is 5'9 and wearing a Size LARGE Hoodie.",
        category = 'Outerwear',
        price = 90.00,
        img_url1 = "https://i.imgur.com/O1sOHc7.png",
        img_url2 = "https://i.imgur.com/Kxts63x.png",
        img_url3 = "https://i.imgur.com/8hWGPbn.png"
    )
    demo_product_14 = Product(
        name = "Sun Utility Vest",
        description = "This Vest features 15 pockets, branded buttons, a lavender mesh lining and embroidered logos, there’s something to appreciate no matter where your eyes land. Each Vest also includes a detachable R2 Spiral Keychain. ",
        category = 'Outerwear',
        price = 125.00,
        img_url1 = "https://i.imgur.com/cDLgJJL.jpg",
        img_url2 = "https://i.imgur.com/4uwigu6.png",
        img_url3 = "https://i.imgur.com/YmHJvkp.png"
    )
    demo_product_15 = Product(
        name = "Speed Turtle Anorak",
        description = "Model is 5'9 and wearing a Size LARGE Anorak.",
        category = 'Outerwear',
        price = 115.00,
        img_url1 = "https://i.imgur.com/FRoTZ2s.jpg",
        img_url2 = "https://i.imgur.com/bVql5hN.jpg",
        img_url3 = "https://i.imgur.com/OHD4YIS.jpg"
    )
    demo_product_16 = Product(
        name = "AVALANCHE PARKA JACKET",
        description = "The perfect companion piece to our Avalanche Pants. The Avalanche Parka features rubber patch, puff print back logo, two in one front pockets, snap center front placket with high collar, adjustable waist with toggle and cord, elastic cuffs and tunneled hood with toggle and cord. Based on a 1980s anorak jacket. ",
        category = 'Outerwear',
        price = 130.00,
        img_url1 = "https://i.imgur.com/tTudkRp.png",
        img_url2 = "https://i.imgur.com/GyFUPhV.png",
        img_url3 = "https://i.imgur.com/HB0G47u.png"
    )
    demo_product_17 = Product(
        name = "PLANET AFTER HOODIE",
        description = "The 'After Hood' was a staple of the 1930s and 40s workforce. Made from scratch using crewneck sweaters, the hood became necessary during the cold winter months. Our After Hoodie features draw strings, a small embroidered patch on the pocket, as well as a puff print on the back logo. ",
        category = 'Outerwear',
        price = 120.00,
        img_url1 = "https://i.imgur.com/20zfMjQ.png",
        img_url2 = "https://i.imgur.com/CGWZn73.png",
        img_url3 = "https://i.imgur.com/hCKMmWx.png"
    )
    demo_product_18 = Product(
        name = "H.B. Stripe Coat",
        description = "Soft Handfeel, Fully Lined Body and Sleeves for Comfort, Interior Chest Pocket on Wearers Left, Side Pocket Entry on Patch Pockets. Round Two & LRG Collaborative Artwork on back, Digital Print Mixed with Chenille, Round Two & LRG Rubber Sleeve Patch, Faux Horn Buttons.",
        category = 'Outerwear',
        price = 300.00,
        img_url1 = "https://i.imgur.com/vxA8uQx.png",
        img_url2 = "https://i.imgur.com/kKrpoHT.png",
        img_url3 = "https://i.imgur.com/Uhbdx7O.png"
    )
    demo_product_19 = Product(
        name = "Sample Quilt Tote Bag by FSP #4",
        description = "A unique tote bag made out of sample pieces from the first collection of cut and sew clothing from Round Two.",
        category = 'Accessories',
        price = 200.00,
        img_url1 = "https://i.imgur.com/1bSOyYz.png",
        img_url2 = "https://i.imgur.com/oSVnq14.png",
        img_url3 = "https://i.imgur.com/9oJInNU.png"
    )
    demo_product_20 = Product(
        name = "Moto Grand Prix Tote Bag",
        description = "Features matching graphics on The Moto Grand Prix Racing Jacket and Tees. Constructed with the same trim as the Moto Grand Prix Jacket!",
        category = 'Accessories',
        price = 30.00,
        img_url1 = "https://i.imgur.com/SuOvs3z.jpg",
        img_url2 = "https://i.imgur.com/zggVoWt.jpg",
        img_url3 = "https://i.imgur.com/iNnjiK1.png"
    )
    demo_product_21 = Product(
        name = "Potato Chip Beanie",
        description = "Includes Removable Enamel Pin. One Size ",
        category = 'Accessories',
        price = 36.00,
        img_url1 = "https://i.imgur.com/Hxr8Whu.png",
        img_url2 = "https://i.imgur.com/QZTCwo2.png",
        img_url3 = "https://i.imgur.com/miEYgnK.png"
    )
    demo_product_22 = Product(
        name = "R2 Canvas Leather Keychain",
        description = "A heavy canvas/leather keychain featuring Round Two in maroon.",
        category = 'Accessories',
        price = 15.00,
        img_url1 = "https://i.imgur.com/LUqvXjk.png",
        img_url2 = "https://i.imgur.com/7a6bwlP.png",
        img_url3 = "https://i.imgur.com/IAjDlte.png"
    )
    demo_product_23 = Product(
        name = "DOUBLE BRIM CANVAS BUCKET HAT",
        description = "The Double Brim Canvas Bucket Hat is essentially three hats in one! It features rubber patch, and two extra corduroy brims providing tons of fit options!",
        category = 'Accessories',
        price = 32.00,
        img_url1 = "https://i.imgur.com/xzoS448.png",
        img_url2 = "https://i.imgur.com/a2ld1aq.png",
        img_url3 = "https://i.imgur.com/oTZCQJr.png"
    )
    demo_product_24 = Product(
        name = "Sol x R2 Spectra Kendama 'Orange'",
        description = "Ecologically Hand-Dyed European Birch Veneer, dried, NAN!O cleared, REVO Painted and fully produced by O Kendamas in their Latvian Workshop!",
        category = 'Accessories',
        price = 120.00,
        img_url1 = "https://i.imgur.com/7r6Qa5b.png",
        img_url2 = "https://i.imgur.com/fIB7WlB.png",
        img_url3 = "https://i.imgur.com/qYZVCDK.png"
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
    db.session.add(demo_product_13)
    db.session.add(demo_product_14)
    db.session.add(demo_product_15)
    db.session.add(demo_product_16)
    db.session.add(demo_product_17)
    db.session.add(demo_product_18)
    db.session.add(demo_product_19)
    db.session.add(demo_product_20)
    db.session.add(demo_product_21)
    db.session.add(demo_product_22)
    db.session.add(demo_product_23)
    db.session.add(demo_product_24)

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
