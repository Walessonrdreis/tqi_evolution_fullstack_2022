import React, {useContext} from 'react';
import * as C from  "./ShoppingCartStyles";
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
  
    </C.container>
  )
}

export default ShoppingCart;