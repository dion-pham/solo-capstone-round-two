import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { login } from '../../../store/session';
import './LoginForm.css'


const LoginForm = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const user = useSelector(state => state.session.user);

  if (user) {
    history.goBack()
  }

  useEffect(() => {
    const errors = []
    if (email.length === 0) {
      errors.push("Email is required")
    }
    if (password.length === 0) {
      errors.push("Password is required")
    }
    setErrors(errors)
  }, [email, password])


  const onLogin = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)
    resetErrors()
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const resetErrors = () => {
    setErrors([])
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };



  return (
    <div className='login-form'>
      <div className='login-words'>
        <h3>Login</h3>
      </div>
      <form onSubmit={onLogin}>
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
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='login-button'>
          <button type='submit'>Login</button>
        </div>
      </form>
      <Link to={'/sign-up'}
        onClick={() => setShowModal(false)}
      >
        <button>
          Create account
        </button>
      </Link>
      <button
        className="sign-up"
        type="submit"
        onClick={() => {
          resetErrors()
          dispatch(login("demo@aa.io", "password"))
        }}
      >
        Demo User
      </button>
    </div>
  );
};

export default LoginForm;
