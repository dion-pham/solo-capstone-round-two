from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class ReviewForm(FlaskForm):

    user_id = IntegerField('user_id', validators=[
        DataRequired()])
    product_id = IntegerField('product_id', validators=[
        DataRequired()])
    message = StringField('message', validators=[
        DataRequired(message='Message is required')])
    rating = IntegerField('rating', validators=[
        DataRequired(message='Rating is required')])
