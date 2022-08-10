import React, {useContext} from 'react';

import {themeContext} from "../../Context"
import Toggle from "../Toggle/Toggle";
import * as C from "./NavbarStyles";

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';import HomeIcon from "@iconscout/react-unicons/icons/uil-home";


const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  return (
    <C.Nav style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>

      <div className="n_left">
      <HomeIcon />
      <Toggle />
      </div>
      <div className="n_right">
        <div className="n_list">
          <ul>
            <li>
              <Link  style={{ 
      background: darkMode ? "black" : "", color: darkMode ? "white" : "",}}className="link" to="/">
      Home</Link>
            </li>
            <li>
              <Link  style={{ 
      background: darkMode ? "black" : "", color: darkMode ? "white" : "",}}className="link" to="/">
      Services</Link>

                  <ul className="sub-list-services">
                  <li>
                         <Link className="link" to="signup">
                           Criar Conta
                          </Link>
                      </li>
                      <li>
                         <Link className="link" to="signbooks">
                           Cadastrar livros
                          </Link>
                      </li>
                      <li>
                         <Link className="link" to="shop">
                           Comprar Livros
                          </Link>
                      </li>
                      <li>
                        <Link className="link" to="sellbooks">
                          Vender Livros
                        </Link>
                      </li>
                  </ul>


            </li>
            <li>
              <Link  style={{ 
      background: darkMode ? "black" : "",color: darkMode ? "white" : "",}}className="link" to="/">
      Categorias</Link>
      <ul className="sub-list-category">
                    <li>
                      <Link className="link" to="item1">
                      item1
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="item2">
                        item2 
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="item3">
                        item3
                      </Link>
                    </li>
                </ul>
            </li>
            <li>
              <Link style={{ 
      background: darkMode ? "black" : "", color: darkMode ? "white" : "",}} className="link" to="/">
      Bookmarks</Link>
            </li>
            <li>
              <Link  style={{ 
      background: darkMode ? "black" : "", color: darkMode ? "white" : "",}}className="link" to="/">
      Contact</Link>
            </li>
          </ul>

        </div>
      </div>
      
      

    </C.Nav>
  )
}

export default Navbar