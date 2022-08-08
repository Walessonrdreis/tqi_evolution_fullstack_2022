import React, {useContext} from 'react';
import * as C from  "./SearchStyles";
import Searching from "@iconscout/react-unicons/icons/uil-search";
import {themeContext} from "../../Context";
import { Link } from "react-scroll";




const Search = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  const handleClick = () => {
    //debugger.debug
    theme.dispatch({type: "search"});
 };
  
  return(
    <C.container>

    <input for="search" type="text" placeholder="search..."/>
    <Link to="/">
    <Searching className="search"/>
    </Link>
    </C.container>
  )
}

export default Search;