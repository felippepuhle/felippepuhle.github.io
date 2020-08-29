import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'light' ? '/icons/moon.svg' : '/icons/sun.svg'} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
