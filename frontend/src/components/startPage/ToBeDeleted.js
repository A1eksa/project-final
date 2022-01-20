import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, batch } from 'react-redux';
import { API_URL } from '../../utils/constants';
import user from '../../reducers/user';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [validationError, setValidationError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    };
    fetch(API_URL('signup'), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          console.log('Success!!');
          navigate('/signin');
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setEmail(null));
            dispatch(user.actions.setError(data.response));
            setValidationError(data.message);
            console.log('DATA MESSAGE', data.response);
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
      <button type='submit'>SignUp</button>
    </form>
  );
};
export default SignUp;
