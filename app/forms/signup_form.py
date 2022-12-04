from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    # username = StringField(
    #     'username', validators=[DataRequired(), username_exists])
    first_name = StringField('first_name', validators=[DataRequired(message='First Name is required'), Length(min=3, max=50, message='First Name needs to be between 3 and 50 characters')])
    last_name = StringField('last_name', validators=[DataRequired(message='Last Name is required'),Length(min=3, max=50, message='Last Name needs to be between 3 and 50 characters')])
    email = StringField('email', validators=[DataRequired(message='Email is required'), user_exists, Email(message='Must be a valid email'),Length(min=3, max=50, message='Email needs to be between 3 and 50 characters')])
    password = StringField('password', validators=[DataRequired(message='Password is required'),Length(min=6, max=50, message='Password needs to be between 6 and 50 characters')])
