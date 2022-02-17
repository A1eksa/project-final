import React, { useState, useEffect } from 'react';
import { useSelector, batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_URL } from '../../utils/constants';

import user from '../../reducers/user';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  NewInput,
  PageWrapper,
  SubmitButton,
  Label,
  Line,
  H1,
  Preamble,
  P,
} from './_SignInStyles';

export const SignIn = () => {
  const accessToken = useSelector((store) => store.user.accessToken);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('signin');
  const [activeForm, setActiveForm] = useState('signin');

  const [validationError, setValidationError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      Swal.fire({
        title: 'Welcome!',
        showCancelButton: false,
        confirmButtonColor: 'var(--accent-green)',
        background: 'var(--level-three)',
        color: 'var(--text-primary)',
        confirmButtonText: "Let's go!",
        width: '343px',
      });
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
            setValidationError(data.message);

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
            setValidationError(data.message);
          });
        }
      });
  };
  return (
    <PageWrapper>
      {activeForm === 'signin' && (
        <BoxContainer>
          <Line></Line>
          <H1>Welcome back friend!</H1>
          <Preamble>Sign in and keep track of your stuff!</Preamble>
          <FormContainer onSubmit={onFormSubmit}>
            <Label htmlFor='username'>
              Username
              <NewInput
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Label>
            <Label htmlFor='password'>
              Password
              <NewInput
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
            <SubmitButton type='submit' onClick={() => setMode('signin')}>
              Signin
            </SubmitButton>
            {validationError !== null && <P>{validationError}</P>}
          </FormContainer>
          <BoldLink onClick={() => setActiveForm('signup')}>
            Wanna be friends? 😍 Sign up!
          </BoldLink>
        </BoxContainer>
      )}

      {activeForm === 'signup' && (
        <BoxContainer>
          <Line></Line>
          <H1>What's on your mind?</H1>
          <Preamble>
            Create a user and let us help you keep track of your habits and
            todos!
          </Preamble>
          <FormContainer onSubmit={onFormSubmit}>
            <Label htmlFor='username'>
              Username
              <NewInput
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Label>
            <Label htmlFor='email'>
              Email
              <NewInput
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Label>
            <Label htmlFor='password'>
              Password
              <NewInput
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
            {password && password.length < 5 ? (
              <P>Password must be over 5 characters</P>
            ) : (
              ''
            )}
            <SubmitButton type='submit' onClick={() => setMode('signup')}>
              Signup
            </SubmitButton>
            {validationError !== null && <P>{validationError}</P>}
          </FormContainer>
          <BoldLink onClick={() => setActiveForm('signin')}>
            Already a user? ❤️ Sign in!
          </BoldLink>
        </BoxContainer>
      )}
    </PageWrapper>
  );
};
