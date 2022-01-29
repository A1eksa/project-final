import React, { useState, useEffect } from 'react';
import { useSelector, batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import user from '../../reducers/user';
import { API_URL } from '../../utils/constants';

import { 
  PageWrapper,
  Line,
  H1,
  Preamble,
  FormWrapper,
  Label,
  Input,
  Button,
} from './_SignInStyles';

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
    <PageWrapper>
            <Line></Line>
      <H1>What's on your mind?</H1>
      <Preamble>Create a user and save all your thoughts, habits and daily tasks!</Preamble>
    <FormWrapper onSubmit={onFormSubmit}>
      <Label htmlFor='username'>
        Username
        <Input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
      </Label>
      <Label htmlFor='message'>
        Email
        <Input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </Label>
      <Label htmlFor='password'>
        Password
        <Input
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </Label>
      <Button type='submit' onClick={() => setMode('signup')}>
        SignUp
      </Button>
      <Button type='submit' onClick={() => setMode('signin')}>
        SignIn
      </Button>
    </FormWrapper>
    </PageWrapper>
  );
};
export default SignIn;
