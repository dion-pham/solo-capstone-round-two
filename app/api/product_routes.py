from flask import Blueprint, jsonify, request
from .auth_routes import validation_errors_to_error_messages
from app.models import User, db
from app.models.product import Product
from app.models.review import Review
from app.forms.review_form import ReviewForm
from flask_login import current_user, login_required

product_routes = Blueprint('products', __name__)
# dont forget to put this in the init!!


@product_routes.route('/', methods=['GET'])
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

# get all reviews from a product
@product_routes.route('/<int:productId>/reviews', methods=['GET'])
def fetch_product_reviews(productId):
    all_reviews = Review.query.filter(Review.product_id == productId)
    parsed_review_dict = {}
    for review in all_reviews:
        parsed_review_dict[review.id] = review.to_dict()
    return parsed_review_dict


# create a review for a product
@product_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def create_product_review(id):
    # create a review form
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        review = Review(
            user_id = data['user_id'],
            product_id = data['product_id'],
            message = data['message'],
            rating = data['rating'])
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
