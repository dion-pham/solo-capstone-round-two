from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class AddressForm(FlaskForm):

    user_id = IntegerField('user_id', validators=[
        DataRequired()])
    address1 = StringField('address1', validators=[
        DataRequired(message='Address is required')])
    city = StringField('city', validators=[
        DataRequired(message='City is required')])
    state = StringField('state', validators=[
                        DataRequired(message='State is required')])
    country = StringField('country', validators=[
        DataRequired(message='Country is required')])
    zip_code = StringField('zip_code', validators=[
        DataRequired(message='Zip Code is required')
    ])
