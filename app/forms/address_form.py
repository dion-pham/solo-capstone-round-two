from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


class AddressForm(FlaskForm):

    user_id = StringField('user_id', validators=[
                        DataRequired(message='User id is required')])
    address1 = StringField('address1', validators=[
                        DataRequired(message='Address is required')])
    address2 = StringField('address2')
    city = StringField('city', validators=[
                        DataRequired(message='City is required')])
    state = StringField('state', validators=[
                        DataRequired(message='State is required')])
    country = StringField('country', validators=[
                        DataRequired(message='Country is required')])
    zip_code = IntegerField('zip_code', validators=[
                        DataRequired(message='Zip Code is required')
    ])
    phone = StringField('phone', validators=[
                        DataRequired(message='Phone # is required')])
