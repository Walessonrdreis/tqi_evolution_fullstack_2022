import React, { useState } from 'react'
import { NavLink ,Link} from 'react-router-dom'
import * as C from "./CardStyles";
import { link } from "react-scroll";




const Card = ({vetor, selecionar}) => {

  return (
    <>

      {  
          
          vetor.map((obj, indice)=>(
            
      <C.card className="cards" key={indice}>
            
         <div className="cards-body" >
       
      <Link to={`/bookDetail/${obj.id}`}>
        <div className="card-img-book">
        <img src={obj.img} alt={obj.titulo} height="100%"  width="100%" />
        </div> 
      </Link>
        <div className="card-footer">
        {obj ===[]}
        <h6>Titulo:{obj.titulo}</h6>
        <h6>Autor: {obj.autor}</h6>
        <h6>Preço: R$: {obj.preco}</h6>
        <Link to={``} >
        <button onClick={() => {selecionar(indice)}} className="btn-cart">Comprar</button>
           <button>Adicionar ao carrinho</button>
              <button>Adicionar aos favoritos</button>
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