import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import TableBookDetail from './TableBookDetail/TableBookDetail';


const BookDetail = (props) => {
  //Objeto Livros
  const livro = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    img: '',
    preco: ''
  }
  let { id } = useParams();
  //useState
  const [btnCadastrar, setbtnCadastrar] = useState(true);
  const [livros, setlivros] = useState([]);
  const [objLivro, setObjLivro] = useState(livro);

  //useEffect : utilizado quando o componente é montado
  // Quando a tabela e o usuário estiverem sendo exibidos para o usuário 
  //Fará a requisição com o backend, obter os livros e em seguida enviar para o useEffect livros
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(async (res) => {
      const result = await res.json();
      setlivros(result);
    })
    .catch(function (err) {
      console.log("fatching failed", err);
    })  
  },[])//[] garante que não entre em loop infinito de requisições, sem ele entra

 
  //Limpar formulário
  const limparFormulario =() => {
    setObjLivro(livro);
    setbtnCadastrar(true)
  }

  //selecionar livro
   const selectedLivro = (indice) => {//através do índice que se sabe qual produto será selecionado e exibido no formulário
    setObjLivro(livros[indice])
    setbtnCadastrar(false);//ocultar cadastrar para aparecer os outros botões de ação

    
  }
       
  return (
    <>
    <TableBookDetail vetor={livros} selecionar={selectedLivro}/>
    </>
    
  )
}

export default BookDetail;