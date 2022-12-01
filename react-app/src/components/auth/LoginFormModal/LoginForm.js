import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../../store/session';


const LoginForm = ({ showModal, setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    resetErrors()
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  // what is this for
  const resetErrors = () => {
    setErrors([])
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <div>

      <form onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit'>Login</button>
        </div>
      </form>
      <Link to={'/sign-up'}
        onClick={() => setShowModal(false)}
      >
        Create account
      </Link>
      <button
        className="sign-up"
        onClick={() => {
          resetErrors()
          setEmail("demo@aa.io")
          setPassword("password")
          dispatch(login(email, password))
        }}
      >
        Demo User
      </button>
    </div>

  );
};

export default LoginForm;
