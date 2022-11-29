from flask import Blueprint, jsonify, request
from app.models import User, db
from app.models.purchase import Purchase
from app.models.purchase_product import PurchaseProduct
from app.forms.purchase_form import PurchaseForm
from flask_login import current_user, login_required

purchase_routes = Blueprint('purchase', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# fetch a user's purchases by user id
@purchase_routes.route('/user/<int:id>', methods = ['GET'])
@login_required
def fetch_user_purchases(id):
    user_purchases = Purchase.query.filter_by(user_id=id).all()
    parsed_user_purchases_dict = {}
    for purchase in user_purchases:
        parsed_user_purchases_dict[purchase.id] = purchase.to_dict()
        # loop through the products key in dictionary and then grab product.price
        # product_list = purchase.to_dict()['products']
        # sum = 0
        # for ind_product in product_list:
            # sum = sum + ind_product['price']
        # add it to a sum and then make purchase.pretaxprice = sum
    # for purchase in user_purchases:
        # parsed_user_purchases_dict[purchase.id]["pretax_total_price"] = sum
    return parsed_user_purchases_dict

# do the same pretax total iteration above for the get route below

# fetch a purchase by its individual id
@purchase_routes.route('/<int:id>', methods = ['GET'])
@login_required
def fetch_single_purchase(id):
    user_purchases = Purchase.query.filter_by(id=id).all()
    parsed_user_purchases_dict = {}
    for purchase in user_purchases:
        parsed_user_purchases_dict[purchase.id] = purchase.to_dict()
    return parsed_user_purchases_dict


# creating instance of purchase will be done by cart
@purchase_routes.route('', methods=['POST'])
@login_required
def create_purchase():
    form = PurchaseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        purchase = Purchase(
            user_id = form.data['user_id'],
            pretax_total_price = form.data['pretax_total_price'],
            shipping_instructions = form.data['shipping_instructions']
        )
    db.session.add(purchase)
    db.session.commit()

    purchase_join = request.json['purchase_join']
    # how to test in postman??
    for item in purchase_join:
        new_item = PurchaseProduct(
            product_id = item.id,
            purchase_id = purchase.id,
            quantity = item.quantity,
            size = item.size
                )
        db.session.add(new_item)
    db.session.commit()

    # return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return purchase.to_dict()




# append the purchaseproduct instances to this as well

#edit a purchases shipping instructions
@purchase_routes.route('/<int:id>', methods = ['PUT'])
@login_required
def update_purchase(id):
    editted_purchase = Purchase.query.filter_by(id=id).first()
    data= request.get_json()
    editted_purchase.shipping_instructions = data['shipping_instructions']
    db.session.commit()
    return editted_purchase.to_dict()

#delete a purchase
@purchase_routes.route('/<int:id>', methods = ['DELETE'])
@login_required
def delete_purchase(id):
    deleted_purchase = Purchase.query.filter_by(id=id).first()
    db.session.delete(deleted_purchase)
    db.session.commit()
    return {"message": "Successfully deleted"}
