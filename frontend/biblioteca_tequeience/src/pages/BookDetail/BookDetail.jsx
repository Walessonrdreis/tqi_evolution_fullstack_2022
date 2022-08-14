import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, useParams, Link} from "react-router-dom"

const BookDetail = (props) => {
  let {id} = useParams();
  const [livroDetail, setLivroDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/listar" + id + ".json")
      .then(async(res)=>{
        const retorno = await res.json();
        setLivroDetail(retorno);
      })
      .catch(function (err){
        console.log("Fatching failed", err);
      });

    }, []);
    const ld = livroDetail;
       
  return (

    <div className="container">
    <div className="product-detail" style={{ textAlign: "left" }}>
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
      <table className="table">
        <tbody>
          <tr>
            <td>Image:</td>
            <td>
              <img src={ld.img} alt="" />
            </td>
          </tr>
          <tr>
            <td>Titulo</td>
            <td>{ld.titulo}</td>
          </tr>
          <tr>
            <td>Autor:</td>
            <td>{ld.autor}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                className="btn btn-dark"
                onClick={() => props.addtocart(ld)}
              >
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default BookDetail;