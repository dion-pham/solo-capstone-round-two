from flask import Blueprint, jsonify, request
from .auth_routes import validation_errors_to_error_messages
from app.models import User, db
from app.models.address import Address
from app.forms.address_form import AddressForm
from flask_login import current_user, login_required

address_routes = Blueprint('address', __name__)
# need a get, post, put, and no delete needed? because the address is tied into
# user details like first name and last name would be

# fetch user address. should be only one


@address_routes.route('/user/<int:id>', methods=['GET'])
@login_required
def fetch_user_address(id):
    user_address = Address.query.filter_by(user_id=id).all()
    parsed_user_address = {}
    for address in user_address:
        parsed_user_address[address.id] = address.to_dict()
    return parsed_user_address


@address_routes.route('', methods=['POST'])
@login_required
def create_address():
    form = AddressForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        address = Address(
            user_id=form.data['user_id'],
            address1=form.data['address1'],
            address2=form.data['address2'],
            city=form.data['city'],
            state=form.data['state'],
            country=form.data['country'],
            zip_code=form.data['zip_code'],
            phone=form.data['phone'])
        db.session.add(address)
        db.session.commit()
        return address.to_dict()
    print(form.data)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@address_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_address(id):
    editted_address = Address.query.filter_by(id=id).first()
    data = request.get_json()
    editted_address.user_id = data['user_id'],
    editted_address.address1 = data['address1'],
    editted_address.address2 = data['address2'],
    editted_address.city = data['city'],
    editted_address.state = data['state'],
    editted_address.country = data['country'],
    editted_address.zip_code = data['zip_code'],
    editted_address. phone = data['phone']
    db.session.commit()

    return editted_address.to_dict()


@address_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_address(id):
    deleted_address = Address.query.filter_by(id=id).first()
    db.session.delete(deleted_address)
    db.session.commit()
    return {"message": "Successfully deleted"}
