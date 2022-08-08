import React, {useContext} from 'react';
import * as C from  "./CartStyles";
import Cart from "@iconscout/react-unicons/icons/uil-shopping-cart";
import {themeContext} from "../../Context";
import { Link } from "react-scroll";
import CartPage from "../../pages/ShoppingCart/ShoppingCart";




const ShoppingCart = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  const handleClick = () => {
    //debugger.debug
    theme.dispatch({type: "cart"});
 };
  
  return(
    
    <C.container>
    <Link to="#">
    <Cart id="cart"/>
    <input for="cart" type="checkbox"/>
    <div
      className="t-button"
      style={darkMode ? {left: "2px "}: {right: "2px"}}></div>
    </Link>
    <Link>


    </Link>
    </C.container>

    
  )
}

export default ShoppingCart;