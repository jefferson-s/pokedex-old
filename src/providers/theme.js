import React, { createContext, useState } from "react";

const themes = {
  dark: '#000',
  light: '#fff'
}

export const ThemeContext = createContext();
//theme Dark
export const ThemeProvider = props => {
  const [theme, setTheme] = useState(themes.dark);
//function for this
  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
};
//add theme in the project