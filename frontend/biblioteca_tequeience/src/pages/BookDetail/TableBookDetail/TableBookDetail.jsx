import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  useParams,
  Link
} from "react-router-dom";


const TableBookDetail = ({vetor}) => {
    
    const obj = vetor;

  return (
    <>

 
      
        

    <div className="container">
    <div className="product-detail" style={{ textAlign: "left" }}>
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
      <table className="table" key={obj.id}>
        <tbody>
          <tr>
            <td>Image:</td>
            <td>
              <img src={obj.img} alt="" />
            </td>
          </tr>
          <tr>
            <td>Titulo</td>
            <td>{obj.titulo}</td>
          </tr>
          <tr>
            <td>Autor:</td>
            <td>{obj.autor}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                className="btn btn-dark"
             
              >
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
     

  
  

   
    </>
  )
}

export default TableBookDetail;