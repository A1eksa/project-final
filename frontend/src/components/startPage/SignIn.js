import React, { useState, useEffect } from 'react';
import { useSelector, batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import user from '../../reducers/user';
import { API_URL } from '../../utils/constants';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('signup');
  // const [validationError, setValidationError] = useState(null);

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    };

    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setError(null));

            localStorage.setItem(
              'user',
              JSON.stringify({
                userId: data.response.userId,
                username: data.response.username,
                email: data.response.email,
                accessToken: data.response.accessToken,
              })
            );
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setEmail(null));
            dispatch(user.actions.setError(data.response));
            // setValidationError(data.message);
          });
        }
      });
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='username'>
        username
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </label>
      <label htmlFor='message'>
        email
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label htmlFor='password'>
        password
        <input
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <button type='submit' onClick={() => setMode('signup')}>
        SignUp
      </button>
      <button type='submit' onClick={() => setMode('signin')}>
        SignIn
      </button>
    </form>
  );
};
export default SignIn;
