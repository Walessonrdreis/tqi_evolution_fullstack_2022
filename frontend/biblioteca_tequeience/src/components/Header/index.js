import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";


const Header = ()=>{

  return(
  
    <C.Container>
     
      <Link to="/livrocart" className="cart-box">
        Cart:<span className="cart-count">0</span>
      </Link>
    </C.Container>

    
  )
}

export default Header