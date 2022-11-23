from flask import Blueprint, jsonify
from app.models import User, db
from app.models.product import Product
from flask_login import current_user, login_required

product_routes = Blueprint('product', __name__)
# dont forget to put this in the init!!

@product_routes.route('/', methods = ['GET'])
def fetch_all_products():
    all_products = Product.query.all()
    parsed_product_dict = {}
    for product in all_products:
        parsed_product_dict[product.id] = product.to_dict()
    return parsed_product_dict

@product_routes.route('/<int:id>', methods=['GET'])
def fetch_product_by_id(id):
    ind_product = Product.query.filter_by(id=id).first()
    return ind_product.to_dict()
