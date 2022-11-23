"""create all table

Revision ID: 18e3b17c607d
Revises:
Create Date: 2022-11-23 09:11:55.218003

"""
from alembic import op
import sqlalchemy as sa


import os
environment = os.getenv('FLASK_ENV')
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '18e3b17c607d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('size', sa.String(length=25), nullable=True),
    sa.Column('description', sa.String(length=200), nullable=False),
    sa.Column('category', sa.String(length=25), nullable=False),
    sa.Column('price', sa.Float(precision=10), nullable=False),
    sa.Column('img_url1', sa.String(), nullable=False),
    sa.Column('img_url2', sa.String(), nullable=False),
    sa.Column('img_url3', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == 'production':
        op.execute(f"ALTER TABLE products SET SCHEMA {SCHEMA};")

    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=40), nullable=False),
    sa.Column('last_name', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    if environment == 'production':
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

    op.create_table('addresses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('address1', sa.String(length=100), nullable=False),
    sa.Column('address2', sa.String(length=100), nullable=False),
    sa.Column('city', sa.String(length=75), nullable=False),
    sa.Column('state', sa.String(length=75), nullable=False),
    sa.Column('country', sa.String(length=75), nullable=False),
    sa.Column('zip_code', sa.Integer(), nullable=False),
    sa.Column('phone', sa.String(length=25), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == 'production':
        op.execute(f"ALTER TABLE addresses SET SCHEMA {SCHEMA};")


    op.create_table('purchases',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('pretax_total_price', sa.Float(precision=10), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == 'production':
        op.execute(f"ALTER TABLE purchases SET SCHEMA {SCHEMA};")

    op.create_table('purchase_product',
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('purchase_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.ForeignKeyConstraint(['purchase_id'], ['purchases.id'], )
    )

    if environment == 'production':
        op.execute(f"ALTER TABLE purchase_product SET SCHEMA {SCHEMA};")

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('purchase_product')
    op.drop_table('purchases')
    op.drop_table('addresses')
    op.drop_table('users')
    op.drop_table('products')
    # ### end Alembic commands ###
