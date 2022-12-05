import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const errors = []
    if (firstName.length === 0) {
      errors.push("First name field is required")
    }
    if (firstName.length >= 50) {
      errors.push("First name field must be less than 50 characters")
    }
    if (lastName.length === 0) {
      errors.push("Last name field is required")
    }
    if (lastName.length >= 50) {
      errors.push("Last name field must be less than 50 characters")
    }
    if (email.length === 0) {
      errors.push("Email field is required")
    }
    if (email.length >= 50) {
      errors.push("Email field must be less than 50 characters")
    }
    if (password.length === 0) {
      errors.push("Password field is required")
    }
    if (password.length >= 50) {
      errors.push("Password field must be less than 50 characters")
    }
    if (repeatPassword.length === 0) {
      errors.push("Confirm password field is required")
    }
    if (password.length >= 50) {
      errors.push("Repeat password field must be less than 50 characters")
    }
    if (password !== repeatPassword) {
      errors.push('Passwords must match!')
    }
    setErrors(errors)
  }, [firstName, lastName, email, password, repeatPassword])

  const onSignUp = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)
    if (password === repeatPassword) {
      resetErrors()
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const resetErrors = () => {
    setErrors([])
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='sign-up-container'>
      <h1>Create Account</h1>
      <form className='sign-up-form' onSubmit={onSignUp}>
        <div>
          {hasSubmitted && errors.length > 0 && (
            <div>
              The following errors were found:
              <ul>
                {errors.map((error, idx) => (
                  <li key={idx}><i className='fa fa-exclamation-circle' />  {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            onChange={updateFirstName}
            value={firstName}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            onChange={updateLastName}
            value={lastName}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Email'
            name='email'
            onChange={updateEmail}
            value={email}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={updatePassword}
            value={password}
          />
        </div>
        <div>
          <input
            type='password'
            name='repeat_password'
            placeholder='Repeat Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <div className='return-to-store'>
        <Link to={"/products"}>
          Return to Store
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
