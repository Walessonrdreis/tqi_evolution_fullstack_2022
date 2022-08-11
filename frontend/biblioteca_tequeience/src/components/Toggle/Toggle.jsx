import React, {useState} from 'react';
import "./Toggle.css"
import { darkTheme, lightTheme, GlobalStyles } from "../../styles/Global";
import { ThemeProvider } from "styled-components";

import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";


const Toggle = () => {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="toggle" onClick={switchTheme}>
      <Moon />
      <Sun />
      <div
      className="t-button"
     ></div>
    </div>

    </ThemeProvider>
  );
};

export default Toggle