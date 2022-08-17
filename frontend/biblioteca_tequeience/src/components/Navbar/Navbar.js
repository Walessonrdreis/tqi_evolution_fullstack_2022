import React from 'react';


import Toggle from "../Toggle/Toggle";
import * as C from "./NavbarStyles";

import { Link } from 'react-router-dom';import Hamburger from "@iconscout/react-unicons/icons/uil-bars";


const Navbar = () => {
 

  
  return (
    
    <C.Nav >

      <div className="n_left">
      <Link className="link" to="/">
        <Hamburger className="icon-hamburger" />
      </Link>

      </div>
      <div className="n_right">
        <div className="n_list">
          <ul>
            <li>
              <Link className="link" to="/home">
      Home</Link>
            </li>
            <li>
              <Link className="link" to="/">
      User</Link>

                  <ul className="sub-list-services"
                  
                  >
                  <li>
                         <Link className="link" to="/signup">
                           Criar Conta
                          </Link>
                      </li>
                  <li>
                         <Link className="link" to="/">
                           Login
                          </Link>
                      </li>
                      <li>
                         <Link className="link" to="/signbooks">
                           Cadastrar livros
                          </Link>
                      </li>
                      <li>
                         <Link className="link" to="/shop">
                           Comprar Livros
                          </Link>
                      </li>
                      <li>
                        <Link className="link" to="/sellbooks">
                          Vender Livros
                        </Link>
                      </li>
                  </ul>


            </li>
            <li>
              <Link className="link" to="/">
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
              <Link className="link" to="/">
      Favoritos</Link>
            </li>
            <li>
              <Link  className="link" to="/">
      Carrinho</Link>
            </li>
          </ul>

        </div>
      </div>
      
      

    </C.Nav>
  )
}

export default Navbar