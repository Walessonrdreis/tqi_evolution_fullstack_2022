import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  useParams,
  Link
} from "react-router-dom";


const TableBookDetail = ({vetor, selecionar}) => {

  return (
    <>

    {
      vetor.flatMap((obj, indice)=>(
        

    <div className="container">
    <div className="product-detail" style={{ textAlign: "left" }}>
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
      <table className="table" key={`cart-index-${indice}`}>
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
                onClick={() => {selecionar(indice)}}
              >
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
      ))

    }
  

   
    </>
  )
}

export default TableBookDetail;