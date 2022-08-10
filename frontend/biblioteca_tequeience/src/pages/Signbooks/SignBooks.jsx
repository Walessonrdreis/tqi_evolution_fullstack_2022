import React,{useEffect, useState} from 'react';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';


const SignLivos = () => {

  //Objeto Livros
  const livro = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    img: ''
  }

  //useState
  const [btnCadastrar, setbtnCadastrar] = useState(true);
  const [livros, setlivros] = useState([]);
  const [objLivro, setObjLivro] = useState(livro);

  //useEffect : utilizado quando o componente é montado
  // Quando a tabela e o usuário estiverem sendo exibidos para o usuário 
  //Fará a requisição com o backend, obter os livros e em seguida enviar para o useEffect livros
  useEffect(()=>{
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setlivros(retorno_convertido));
  },[])//[] garante que não entre em loop infinito de requisições, sem ele entra

  //Retorno
  return (
    <div>
    {/*<p>{JSON.stringify(livros)}</p>{/*testando se está consumindo os dados */}
    <p>{JSON.stringify(objLivro)}</p>
    <h1>Cadastro de Livros</h1>
      <Form button={btnCadastrar}/>
      <Table vetor={livros}/>
      
    </div>
  )
}

export default SignLivos