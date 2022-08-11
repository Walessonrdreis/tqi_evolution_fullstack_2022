import React from 'react'
import { Link } from 'react-router-dom'
import  * as C from "./ButtonStyles.js"


export const voltar = () =>{


}
const Button = (props) => {
  const {title, onClick} = props;
  return (
    
    <C.button  onClick={onClick} className="btn btn-warning "><Link className="link" to="/">{title}</Link></C.button>
  )
}

export default Button;