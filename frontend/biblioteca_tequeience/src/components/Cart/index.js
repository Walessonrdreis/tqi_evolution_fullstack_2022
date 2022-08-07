import React, {useContext} from 'react';
import * as C from  "./styles";
import Cart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import {themeContext} from "../../Context";
import { Link } from "react-scroll";




const ShoppingCart = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  const handleClick = () => {
    //debugger.debug
    theme.dispatch({type: "cart"});
 };
  
  return(
    <C.container>
    <Cart id="cart">
      teste
    </Cart>
    <input for="cart" type="checkbox"/>

    <div
      className="t-button"
      style={darkMode ? {left: "2px "}: {right: "2px"}}></div>

    

    </C.container>
  )
}

export default ShoppingCart;