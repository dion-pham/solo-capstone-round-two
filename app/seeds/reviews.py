from app.models import db, environment, SCHEMA
from app.models.review import Review


def seed_reviews():
    demo_review_1 = Review(
        user_id=1,
        product_id=1,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_2 = Review(
        user_id=2,
        product_id=1,
        message='So stylish!',
        rating=4,
    )
    demo_review_3 = Review(
        user_id=1,
        product_id=2,
        message='This looks great on me. item fits true to size',
        rating=4,
    )
    demo_review_4 = Review(
        user_id=2,
        product_id=2,
        message='So stylish!',
        rating=5,
    )
    demo_review_5 = Review(
        user_id=1,
        product_id=3,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_6 = Review(
        user_id=2,
        product_id=3,
        message='So stylish!',
        rating=4,
    )
    demo_review_7 = Review(
        user_id=1,
        product_id=4,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_8 = Review(
        user_id=2,
        product_id=4,
        message='So stylish!',
        rating=4,
    )
    demo_review_9 = Review(
        user_id=1,
        product_id=5,
        message='This looks great on me. item fits true to size',
        rating=4,
    )
    demo_review_10 = Review(
        user_id=2,
        product_id=5,
        message='So stylish!',
        rating=5,
    )
    demo_review_11 = Review(
        user_id=3,
        product_id=6,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_12 = Review(
        user_id=4,
        product_id=6,
        message='So stylish!',
        rating=4,
    )
    demo_review_49 = Review(
        user_id=3,
        product_id=7,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_13 = Review(
        user_id=4,
        product_id=7,
        message='So stylish!',
        rating=5,
    )
    demo_review_14 = Review(
        user_id=3,
        product_id=8,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_15 = Review(
        user_id=4,
        product_id=8,
        message='So stylish!',
        rating=5,
    )
    demo_review_16 = Review(
        user_id=3,
        product_id=9,
        message='This looks great on me. item fits true to size',
        rating=4,
    )
    demo_review_17 = Review(
        user_id=4,
        product_id=9,
        message='So stylish!',
        rating=5,
    )
    demo_review_18 = Review(
        user_id=3,
        product_id=10,
        message='This looks great on me. item fits true to size',
        rating=4,
    )
    demo_review_19 = Review(
        user_id=4,
        product_id=10,
        message='So stylish!',
        rating=5,
    )
    demo_review_20 = Review(
        user_id=5,
        product_id=11,
        message='This looks great on me. item fits true to size',
        rating=4,
    )
    demo_review_21 = Review(
        user_id=1,
        product_id=11,
        message='So stylish!',
        rating=4,
    )
    demo_review_22 = Review(
        user_id=5,
        product_id=12,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_23 = Review(
        user_id=1,
        product_id=12,
        message='So stylish!',
        rating=4,
    )
    demo_review_24 = Review(
        user_id=5,
        product_id=13,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_25 = Review(
        user_id=1,
        product_id=13,
        message='So stylish!',
        rating=5,
    )
    demo_review_26 = Review(
        user_id=5,
        product_id=14,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_27 = Review(
        user_id=1,
        product_id=14,
        message='So stylish!',
        rating=5,
    )
    demo_review_28 = Review(
        user_id=5,
        product_id=15,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_51 = Review(
        user_id=1,
        product_id=15,
        message='So stylish!',
        rating=4,
    )
    demo_review_52 = Review(
        user_id=1,
        product_id=16,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_29 = Review(
        user_id=3,
        product_id=16,
        message='So stylish!',
        rating=5,
    )
    demo_review_30 = Review(
        user_id=2,
        product_id=17,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_31 = Review(
        user_id=3,
        product_id=17,
        message='So stylish!',
        rating=5,
    )
    demo_review_32 = Review(
        user_id=2,
        product_id=18,
        message='This looks great on me. item fits true to size',
        rating=5,
    )
    demo_review_33 = Review(
        user_id=3,
        product_id=18,
        message='So stylish!',
        rating=5,
    )
    demo_review_34 = Review(
        user_id=2,
        product_id=19,
        message='great accessory',
        rating=5,
    )
    demo_review_35 = Review(
        user_id=3,
        product_id=19,
        message='look good feel good',
        rating=5,
    )
    demo_review_36 = Review(
        user_id=2,
        product_id=20,
        message='very durable',
        rating=5,
    )
    demo_review_37 = Review(
        user_id=3,
        product_id=20,
        message='nice bag',
        rating=5,
    )
    demo_review_38 = Review(
        user_id=4,
        product_id=21,
        message='this hat keeps me so warm',
        rating=5,
    )
    demo_review_40 = Review(
        user_id=5,
        product_id=21,
        message='i like the fuzzy top on this beanie',
        rating=5,
    )
    demo_review_41 = Review(
        user_id=4,
        product_id=22,
        message='now my keys will never get lost',
        rating=5,
    )
    demo_review_42 = Review(
        user_id=5,
        product_id=22,
        message='very durable',
        rating=5,
    )
    demo_review_43 = Review(
        user_id=4,
        product_id=23,
        message='imma take this hat and go fishing',
        rating=5,
    )
    demo_review_44 = Review(
        user_id=5,
        product_id=23,
        message='i like how its reversible',
        rating=5,
    )
    demo_review_45 = Review(
        user_id=4,
        product_id=24,
        message='so fun to play with',
        rating=5,
    )
    demo_review_46 = Review(
        user_id=5,
        product_id=24,
        message='kinda hard to figure out in the beginning, but once i did. it was so fun',
        rating=4,
    )

    db.session.add_all([demo_review_1,demo_review_2,demo_review_3,demo_review_4,demo_review_5,demo_review_6,
    demo_review_7,demo_review_8,demo_review_9,demo_review_10,demo_review_11,demo_review_12,demo_review_13,demo_review_14,
    demo_review_15,demo_review_16,demo_review_17,demo_review_18,demo_review_19,demo_review_20,demo_review_21,demo_review_22,
    demo_review_23,demo_review_24,demo_review_25,demo_review_26,demo_review_27,demo_review_28,demo_review_29,demo_review_30,
    demo_review_31,demo_review_32,demo_review_33,demo_review_34,demo_review_35,demo_review_36,demo_review_37,demo_review_38,
    demo_review_40,demo_review_41,demo_review_42,demo_review_43,demo_review_44,demo_review_45,demo_review_46,
    demo_review_49,demo_review_51,demo_review_52
    ])
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM reviews')
    db.session.commit()
