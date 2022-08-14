import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as C from "./CardStyles";
import { Link } from "react-scroll";




const Card = ({vetor, selecionar}) => {

  return (
    <>

      {  
          
          vetor.map((obj, indice)=>(
            
      <C.card className="cards" key={indice}>
            
         <div className="cards-body" >
       
        <div className="card-img-book">
      
        <img src={obj.img} alt={obj.titulo} height="100%"  width="100%" />
        </div> 
        <div className="card-footer">
        {obj ===[]}
        <h6>Código:{obj.id}</h6>
        <h6>Titulo:{obj.titulo}</h6>
        <h6>Autor: {obj.autor}</h6>
        <h6>Preço: R$: {obj.preco}</h6>
        <Link to="BuyBook">
        <button onClick={() => {selecionar(indice)}} className="btn-cart">Adicionar Carrinho</button>

        </Link>
        </div>
      
         </div> 
  
      </C.card>
          ))
         
   
    }

    </>
   
     


    
  )
}

export default Card