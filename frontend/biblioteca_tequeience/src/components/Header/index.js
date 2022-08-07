import React, {useContext} from "react";
import {themeContext} from "../../Context"
import Cart from "../Cart"
import * as C from "./styles";

const Header = ()=>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <C.Container style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <C.i_left>
        <C.Header>
          <C.Title>Biblioteca TQIence</C.Title>
        </C.Header>
      </C.i_left>
      <C.i_right>

      <Cart />
      </C.i_right>
    </C.Container>
  )
}

export default Header;