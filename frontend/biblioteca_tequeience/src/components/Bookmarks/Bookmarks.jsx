import React, {useContext} from 'react';
import * as C from  "./BookmarksStyles";
import Bookmark from "@iconscout/react-unicons/icons/uil-bookmark";
import {themeContext} from "../../Context";
import { Link } from "react-scroll";




const Bookmarks = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  const handleClick = () => {
    //debugger.debug
    theme.dispatch({type: "bookmarks"});
 };
  
  return(
    <C.container>
    <Link to="/">
    <Bookmark id="bookmarks"/>
    <input for="bookmarks" type="checkbox"/>
    <div
      className="t-button"
      style={darkMode ? {left: "2px "}: {right: "2px"}}></div>

    </Link>
    </C.container>
  )
}

export default Bookmarks;