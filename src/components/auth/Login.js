import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, isAuthenticated } = authContext;

  const [admin, setAdmin] = useState({
    user: '',
    password: ''
  });

  const { user, password } = admin;

  useEffect(() => {
    if (isAuthenticated || localStorage.getItem('token')) {
      // Redirect to admin page to see messages
      props.history.push('/admin');
    }

    if (error) {
      alert(error);
    }
  }, [error, isAuthenticated, props.history]);

  const onChange = e => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (user === '' || password === '') {
      alert('Please fill out all fields');
    } else {
      login({
        user,
        password
      });
    }
  };

  return (
    <div className='form-container'>
      <h1 className='row justify-content-center'>
        <span className='text-primary'>Login</span>
      </h1>

      <form onSubmit={onSubmit} className='row justify-content-center'>
        <div className='form-group col-auto'>
          <label htmlFor='user'>Username</label>
          <br />
          <input
            type='text'
            name='user'
            value={user}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group col-auto'>
          <label htmlFor='password'>Password</label>
          <br />
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
