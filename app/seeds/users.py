from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    Dion = User(first_name='Dion', last_name='Pham', email='demo@aa.io', password='password')
    John = User(first_name='John', last_name='Doe',email='johndoe@example.com', password='password')
    Jane = User(first_name='Jane', last_name='Doe',email='janedoe@example.com', password='password')
    Jim = User(first_name='Jim', last_name='Smith', email='jimsmith@example.com', password='password')
    Jessica = User(first_name='Jessica', last_name='Brown',email='jessicabrown@example.com', password='password')
    db.session.add(Dion)
    db.session.add(John)
    db.session.add(Jane)
    db.session.add(Jim)
    db.session.add(Jessica)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
