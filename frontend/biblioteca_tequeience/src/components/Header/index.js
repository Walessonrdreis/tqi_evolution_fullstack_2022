import React, {useContext} from "react";
import {themeContext} from "../../Context"
import * as C from "./styles";

const Header = ()=>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <C.Container style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <C.Header>
        <C.Title>Biblioteca TQIence</C.Title>
      </C.Header>
    </C.Container>
  )
}

export default Header;