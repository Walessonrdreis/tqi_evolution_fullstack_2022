import React, {useContext} from 'react';
import * as C from  "./UserStyles";
import Users from "@iconscout/react-unicons/icons/uil-user";
import {themeContext} from "../../Context";
import { Link } from "react-scroll";




const User = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  const handleClick = () => {
    //debugger.debug
    theme.dispatch({type: "user"});
 };
  
  return(
    <C.container>
    <Link>
    <input for="user" type="checkbox"/>
    <Users className="users"/>

    </Link>
    </C.container>
  )
}

export default User;