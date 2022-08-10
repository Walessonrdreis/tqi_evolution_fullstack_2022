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

  //Obtendo os dados do formulário
  const aoDigitar = (e) => { //e = evento
    //console.log(e.target);// retorna o objeto que está executando o evento

    //pegando o valor do objeto produto,passar a informação a ser alterada 
    //pelo nome e insere o valor
    setObjLivro({...objLivro, [e.target.name]:e.target.value});
  }

  //cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', //para fazer a requisição
    //por padrão o fetch executa requisição do tipo *get*, é necessário configurar para fazer *post*
    {
      //características
      method:'post', //método
      body:JSON.stringify(objLivro),//o corpo da requisição, os dados que serão utilizados, tem que ser convertido para um texto
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())//retorna um promessa, ele só executa quando o fetch realizar a requisição
    //a promessa tem que ser convertida para um json
    .then(retorno_convertido => {//retorna só se a promessa for convertida em json :console.log(retorno_convertido);
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      } else {
        setlivros([...livros, retorno_convertido])
        alert('Produto cadastrado com sucesso!');
      }
    });
          
  }


  //Retorno
  return (
    <div>
    {/*<p>{JSON.stringify(livros)}</p>{/*testando se está consumindo os dados */}
    {/*<p>{JSON.stringify(objLivro)}</p>*/}
    <h1>Cadastro de Livros</h1>
      <Form button={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar}/>
      <Table vetor={livros}/>
      
    </div>
  )
}

export default SignLivos