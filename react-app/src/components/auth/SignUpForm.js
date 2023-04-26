import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { thunkAddAddress } from '../../store/address';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address1, setAddress1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip_code, setZip_Code] = useState('');
  const [phone, setPhone] = useState('');
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
    if (address1.length === 0) {
      errors.push("Address field is required")
    }
    if (city.length === 0) {
      errors.push("City field is required")
    }
    if (state.length === 0) {
      errors.push("State field is required")
    }
    if (country.length === 0) {
      errors.push("Country field is required")
    }
    if (zip_code.length === 0) {
      errors.push("Zip Code field is required")
    }
    setErrors(errors)
  }, [firstName, lastName, email, password, repeatPassword, address1, city, state, country, zip_code])

  const signUpAddress = async (user_id, address1, city, state, country, zip_code, phone) => {
    const response = await fetch('/api/address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
        address1,
        city,
        state,
        country,
        zip_code,
        phone
      }),
    })
    if (response.ok) {
      const data = await response.json();
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ['An error occurred. Please try again.']
    }
  }


  const onSignUp = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)
    if (password === repeatPassword) {
      resetErrors()
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (Array.isArray(data)) {
        console.log('this is error data')
        setErrors(data)
      } else if (data) {
        const addressMade = await dispatch(thunkAddAddress(data.id,
          address1,
          city,
          state,
          country,
          zip_code,
          ))
          console.log(addressMade, 'address made')
          return addressMade
        // signUpAddress(data.id,
        //   address1,
        //   address2,
        //   city,
        //   state,
        //   country,
        //   zip_code,
        //   phone)
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
      <h1 id='create-account-heading'>Create Account</h1>
      <form className='sign-up-form' onSubmit={onSignUp}>
        <div>
          {hasSubmitted && errors.length > 0 && (
            <div>
              The following errors were found:
              <ul className='sign-up-errors'>
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
            type='text'
            placeholder='Address 1'
            name='address1'
            onChange={(e) => setAddress1(e.target.value)}
            value={address1}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='City'
            name='city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='State'
            name='state'
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='Country'
            name='country'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder='ZIP Code'
            name='zip_code'
            onChange={(e) => setZip_Code(e.target.value)}
            value={zip_code}
          />
        </div>
        {/* <div>
          <input
            type='text'
            placeholder='Phone #'
            name='phone'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div> */}
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
  )
};

export default SignUpForm;
