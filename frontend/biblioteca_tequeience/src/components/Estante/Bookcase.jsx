import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import * as C from "./BookcaseStyles";





const Bookcase = (props) => {
  const [btnCadastrar, setbtnCadastrar] = useState(true);
  const [objLivro, setObjLivro] = useState(livro);
  const [livros, setlivros] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setlivros(retorno_convertido));
  },[])

  const livro = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    img: '',
    preco: 0
  }

  const selectedLivro = (indice) => {//através do índice que se sabe qual produto será selecionado e exibido no formulário
    setObjLivro(livros[indice])
    setbtnCadastrar(false);//ocultar cadastrar para aparecer os outros botões de ação

    
  }

  return (
    <>


    <C.container >
     
      <C.d_left>
      <Card vetor={livros} selecionar={selectedLivro} obj={objLivro} />
    
      </C.d_left>

      <C.d_right>
      <Card vetor={livros} selecionar={selectedLivro} />
      </C.d_right>

    
    </C.container>
    </>

  )
}

export default Bookcase