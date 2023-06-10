/*import React, { useState, useEffect } from 'react';
import './toggle.css';

type Theme = 'light' | 'dark';

function Toggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // When the component mounts, check for the user's preferred color scheme
    const preferredTheme = localStorage.getItem('theme') as Theme | null;
    if (preferredTheme) {
      setTheme(preferredTheme);
    } else {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userPrefersDark) {
        setTheme('dark');
      }
    }
  }, []);

  useEffect(() => {
    // When the theme changes, set the class on the body element and save to local storage
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default Toggle;*/

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './toggle.css';

type Theme = 'light' | 'dark';

function Toggle() {
  const [theme, setTheme] = useState<Theme>('light');

 /* useEffect(() => {
    // When the component mounts, check for the user's preferred color scheme
    const preferredTheme = localStorage.getItem('theme') as Theme | null;
    if (preferredTheme) {
      setTheme(preferredTheme);
    } else {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userPrefersDark) {
        setTheme('dark');
      }
    }
  }, []);*/

  useEffect(() => {
    // When the theme changes, set the class on the body element and save to local storage
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}

export default Toggle;


