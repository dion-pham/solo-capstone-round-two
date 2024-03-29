from flask.cli import AppGroup
from .users import seed_users, undo_users
from .addresses import seed_addresses, undo_addresses
from .products import seed_products, undo_products
from .purchases import seed_purchases, undo_purchases
from .purchaseproducts import seed_purchaseproducts, undo_purchaseproducts
from .reviews import seed_reviews, undo_reviews

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_purchaseproducts()
        undo_purchases()
        undo_reviews()
        undo_products()
        undo_addresses()
        undo_users()
    seed_users()
    seed_addresses()
    seed_products()
    seed_reviews()
    seed_purchases()
    seed_purchaseproducts()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_addresses()
    undo_products()
    undo_reviews()
    undo_purchases()
    undo_purchaseproducts()
    # Add other undo functions here
