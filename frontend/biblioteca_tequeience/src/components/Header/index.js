import React, {useContext} from "react";
import {themeContext} from "../../Context"
import Cart from "../Cart/Cart"
import * as C from "./styles";
import Bookmark from "../Bookmarks/Bookmarks"
import User from "../User/User"; 

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
      <User />
      <Bookmark />
      <Cart />
      </C.i_right>
    </C.Container>
  )
}

export default Header;