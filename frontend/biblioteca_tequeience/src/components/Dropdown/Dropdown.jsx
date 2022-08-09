/**
 * 1. começa fechado
 * 2. Mostrar as opções de menu quando for clicado
 * 3.quando selecionar um item de menu, fechar e indicar qual opção foi selecionada
 * 
 */
import React, { useState } from "react";

export const Dropdown = ({title, options, onSelect})=> {

  const [isOpen, setIsOpen] = useState(false); /* controlando o estado do dropdown */
  
  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  }

  return (

  <div className="c-dropdown">

  <button onClick={() => setIsOpen(true)}>{title}</button>
    {/*tudo o que for false é descartado  */}
    {isOpen && ( 
      <ul role="menu">
      {options.map((option) => (
        <li key={option} 
        role="menuiten"
        onClick={() => handleSelection(option)}>{option}</li>
      ))}

      </ul>

  

    )}
  </div>

);
};


export default Dropdown;