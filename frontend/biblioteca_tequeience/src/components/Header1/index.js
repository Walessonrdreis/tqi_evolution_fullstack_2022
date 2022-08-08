import React, {useContext} from "react";
import {themeContext} from "../../Context"
import Cart from "../Cart/Cart"
import * as C from "./styles";
import Bookmark from "../Bookmarks/Bookmarks"
import User from "../User/User"; 
import Search from "../Search/Search"
import {BrowserRouter as Router, Link , Route, Switch } from "react-router-dom";
import Cartpage from "../../pages/ShoppingCart/ShoppingCart"
const Header = ()=>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <Router>
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
      <Search />
      <User />
      <Bookmark />

      <Cart >
      <Link to="../../pages/ShoppingCart"/>

      </Cart>

    
      </C.i_right>
    </C.Container>

    </Router>
  )
}

export default Header;