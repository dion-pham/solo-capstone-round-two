from app.models import db, environment, SCHEMA
from app.models.review import Review

def seed_reviews():
    demo_review_1= Review(
        user_id = 1,
        product_id= 1,
        message = 'This looks great on me. item fits true to size',
        rating = 5,
    )

    db.session.add(demo_review_1)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM reviews')
    db.session.commit()
