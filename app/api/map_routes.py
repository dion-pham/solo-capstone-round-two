from flask import Blueprint, jsonify
from app.models import User, db
from app.models.product import Product
from flask_login import current_user, login_required
from app.config import Config

config = Config()
key = Config.googleMapsAPIKey

map_routes = Blueprint('maps', __name__)

@map_routes.route('/key', methods=['POST'])
def fetch_api_key():
    print('map route hitting')
    return jsonify({'googleMapsAPIKey': key})
