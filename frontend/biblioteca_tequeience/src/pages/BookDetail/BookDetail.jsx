import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/Api';
import TableBookDetail from './TableBookDetail/TableBookDetail';





export default function BookDetail() {
const book = {}


//useState
const [btnCadastrar, setbtnCadastrar] = useState(true);
const [livros, setlivros] = useState([]);
const [books, setBooks] = useState(book);

//useEffect : utilizado quando o componente é montado
// Quando a tabela e o usuário estiverem sendo exibidos para o usuário 
//Fará a requisição com o backend, obter os livros e em seguida enviar para o useEffect livros
useEffect(()=>{
  fetch(api)
  .then(retorno => retorno.json())
  .then(retorno_convertido =>{setlivros(retorno_convertido);console.log(retorno_convertido)})

},[livros.id])

const selectedLivro = (indice) => {
  setBooks(livros[indice])
}
const GetID = props => {
 const id = livros.id
  
  return (
    <div>GetID{id}</div>
  )
}

return (
  <>
    <GetID />
     <TableBookDetail vetor={livros} selecionar={selectedLivro}/>
     
    </>
    
    )
   
  }