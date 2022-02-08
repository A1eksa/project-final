import React, { useState } from 'react';
import styled from 'styled-components';
import { ChangeEventHandler } from 'react';

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const storedTheme = localStorage.getItem('theme');

const prefersDark =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultDark =
  storedTheme === 'dark' || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// const toggleThemeText = (e) => {
//   if (e.target.checked) {
//     return 'Light';
//   } else {
//     return 'Dark';
//   }
// };

// {dataTheme==='dark'&& ()}

export const DarkMode = () => {
  const [text, setText] = useState(true)
  console.log('text', text)

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
      setText(true)
    } else {
      setLight();
      setText(false)
    }
  };

  return (
    <Label>
      <Input
        onChange={toggleTheme}
        defaultChecked={defaultDark}
        type='checkbox'
      />
      <Switch></Switch>
      Switch to <p>{text ? 'Light' : 'Dark'}</p> theme
      {/* The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.  */}
      {/* {'data-theme' === 'dark' ? 'Set Light Mode' : 'Set Pink Mode'} */}
      {/* {storedTheme === 'dark' ? 'Set Light Mode' : 'Set Dark Mode'} */}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: var(--text-primary);
`;

const Switch = styled.div`
  width: 56px;
  height: 28px;
  background: var(--grey-200);
  border-radius: 32px;
  padding: 4px;
  position: relative;
  transition: 0.2s;

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background-color: #ffffff;
    transform: translate(0, -50%);
    transition: 0.2s;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: var(--accent-green);

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
