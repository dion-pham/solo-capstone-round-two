from flask import Blueprint, jsonify, request
from .auth_routes import validation_errors_to_error_messages
from app.models import User, db
from app.models.review import Review
from app.forms.review_form import ReviewForm
from flask_login import current_user, login_required

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_review(id):
    editted_review = Review.query.get_or_404(id)
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        editted_review.user_id = data['user_id']
        editted_review.product_id = data['product_id']
        editted_review.message = data['message']
        editted_review.rating = data['rating']

        db.session.commit()
        return editted_review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    deleted_review = Review.query.filter_by(id=id).first()
    db.session.delete(deleted_review)
    db.session.commit()
    return {"message": "Successfully deleted"}
