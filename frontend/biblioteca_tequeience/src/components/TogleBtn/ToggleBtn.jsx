import React, { useContext }  from 'react'
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import "../TogleBtn/Styles.css"
import {themeContext} from "../../Context"
const ToggleBtn = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
     //debugger.debug
     theme.dispatch({type: "toggle"});
  };
  
  return (
    <div className="toggleBtn" onClick={handleClick}>
      <Moon className="moonSun" />
      <Sun className="moonSun" />
      <div className="t-button"  style={darkMode ? {left: "0 "}: {right: "0"}} ></div>
    </div>
   
  )
}

export default ToggleBtn;