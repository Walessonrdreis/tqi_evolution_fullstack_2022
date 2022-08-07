import React from 'react';
import Toggle from "../Toggle/Toggle";
import "./styles.css";
import { Link } from "react-scroll";

const Navbar = () =>{
  return (
    <div className="n-wrapper" id="Navbar">
    {/*left */}
    <div className="n-left">
      <div className="n-name">Biblioteca TQIence</div>
      <Toggle />
    </div>
    {/*right*/}
    <div className="n-right">
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true}>
              Serviços
            </Link>
                  <ul style={{ listStyleType: "none" }}>
                      <li>
                         <Link to="works" spy={true} smooth={true}>
                           Compra
                          </Link>
                      </li>
                      <li>
                        <Link to="portfolio" spy={true} smooth={true}>
                          venda
                        </Link>
                      </li>
                  </ul>
            </li>
          <li>
            <Link to="works" spy={true} smooth={true}>
              Categorias
            </Link>
                <ul style={{ listStyleType: "none" }}>
                    <li>
                      <Link to="portfolio" spy={true} smooth={true}>
                      item1
                      </Link>
                    </li>
                    <li>
                      <Link to="portfolio" spy={true} smooth={true}>
                        item2
                      </Link>
                    </li>
                    <li>
                      <Link to="portfolio" spy={true} smooth={true}>
                        item3
                      </Link>
                    </li>
                </ul>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true}>
              Favoritos
            </Link>
          </li>
          <li>
            <Link to="testimonial" spy={true} smooth={true}>
              item5
            </Link>
          </li>
        </ul>
      </div>
      <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>        
      </Link>
    </div>
    </div>
   

  )
}

export default Navbar;