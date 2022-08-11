import React from 'react'
import { NavLink } from 'react-router-dom'
import * as C from "./CardStyles";




const Card = ({vetor, selecionar, obj}) => {
  return (
    
    <C.card className="card">

       {
        vetor.map((obj, indice)=>(
       <div className="card-body">
      <div className="card-img-book">{obj.img}</div>
      <button onClick={() => {selecionar(indice)}} className="btn-cart">Adicionar Carrinho</button>

      
      <h6>{obj.titulo}</h6>
      <h6>{obj.preco}</h6>
    
       </div> 

        ))
       }
 

    </C.card>
  )
}

export default Card