from app.models import db, environment, SCHEMA
from app.models.address import Address

def seed_addresses():
    demo_address_1= Address(
        user_id = 1,
        address1= '7320 Melrose Ave',
        city = 'Los Angeles',
        state = 'California',
        country = 'USA',
        zip_code = "90046"
    )

    db.session.add(demo_address_1)
    db.session.commit()

def undo_addresses():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute('DELETE FROM addresses')
    db.session.commit()
