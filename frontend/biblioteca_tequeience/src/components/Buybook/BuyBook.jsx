import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as C from "./BuyBookStyles";




export const BuyBook = ({button, eventoTeclado, obj, remover,}) => {
 

  return (
    <C.container>  
               
      <C.card className="cards" >
            
         <div className="cards-body" >
       
        <div className="card-img-book">
    

        <img src={obj.img} height="100%" width="100%"/>

     
        </div> 
        
        {obj ===[]}
        <h6>Código:{obj.id}</h6>
        <h6>Titulo:{obj.titulo}</h6>
        <h6>Autor: {obj.autor}</h6>
        <h6>Preço: R$: {obj.preco}</h6>
      
        <button className="btn-cart">+Carrinho</button>
        <button className="btn-cart">Comprar</button>
        <button className="btn-cart">+Favoritos</button>
         </div> 
  
      </C.card>
        
         
   
  

    </C.container>
   
     


    
  )
}

export default BuyBook;