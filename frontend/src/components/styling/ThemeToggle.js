import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import useLocalStorage from 'use-local-storage';

export const ThemeToggle = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
      <button onClick={switchTheme}>DarkMode</button>
    </div>
  );
};
