import React, { useState, useEffect, createContext } from 'react';
import { useSelector, batch, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import user from '../../reducers/user';
import { API_URL } from '../../utils/constants';
// import { SignInMargins } from './SignInMargins';

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
} from './_SignInStyles';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('signin');
  const [activeForm, setActiveForm] = useState('signin');

  // const AccountContext = createContext();
  // const [validationError, setValidationError] = useState(null);

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const onToggleClick = () => {
  //   if (mode === 'signin') {
  //     setMode('signup');
  //     setIsContainerActive(true);
  //   } else {
  //     setMode('signin');
  //     setIsContainerActive(false);
  //   }
  // };

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
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
            <SubmitButton type='submit' onClick={() => setMode('signin')}>
              Signin
            </SubmitButton>
          </FormContainer>
          {/* <MutedLink onClick={() => setActiveForm('signup')}> */}

          <BoldLink onClick={() => setActiveForm('signup')}>
            Wanna be friends? Signup
          </BoldLink>
          {/* </MutedLink> */}
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
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>
            <SubmitButton type='submit' onClick={() => setMode('signup')}>
              Signup
            </SubmitButton>
          </FormContainer>
          {/* <MutedLink > */}

          <BoldLink onClick={() => setActiveForm('signin')}>
            Already a user? Signin!
          </BoldLink>
          {/* </MutedLink> */}
        </BoxContainer>
      )}
    </PageWrapper>
  );
};
export default SignIn;
