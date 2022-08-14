import React,{useEffect, useState} from 'react';
import BuyBook from '../../components/Buybook/BuyBook'
import Card from '../../components/Card/Card';



const Shop = () => {
  const livro = {
    id: 0,
    titulo: '',
    autor: '',
    editora: '',
    img: '',
    preco: '0.0'
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
   const remover = () => {
    fetch('http://localhost:8080/remover/' +objLivro.id, //para fazer a requisição
    //por padrão o fetch executa requisição do tipo *get*, é necessário configurar para fazer *post*
    {
      //características
      method:'delete', //método
     //não temos nada no body
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())//retorna um promessa, ele só executa quando o fetch realizar a requisição
    //a promessa tem que ser convertida para um json
    .then(retorno_convertido => {//retorna só se a promessa for convertida em json :console.log(retorno_convertido);
     //Mensagem
     alert(retorno_convertido.mensagem);//efetuar melhorias em certos 
     
     //cópia do vetor de livros
     let vetorTemp = [...livros]; //temporário 
  
     //índice
      let indice = vetorTemp.findIndex((book) => { //método padrão do JS que percorre o vetor e devolve as posição de alguma verificação
      return book.id === objLivro.id;  //se na linha do vetor temp o id dele é igual ao id do objLivro, retorna a posição do livro com o id
      });
  
      //Remover livro do vetorTemp
      vetorTemp.splice(indice, 1);
  
      //atualizar o vetor de livros 
      setlivros(vetorTemp);
  
      //limpar formulário 
      limparFormulario();
  
    });
  }
  
  //Limpar formulário
  const limparFormulario =() => {
    setObjLivro(livro);
    setbtnCadastrar(true)
  }
  
  //selecionar livro
   const selectedLivro = (indice) => {//através do índice que se sabe qual produto será selecionado e exibido no formulário
    setObjLivro(livros[indice])

    if (indice.length == 1){
      
    }
  
    
  }
  return (
    <div>
   <BuyBook button={btnCadastrar} eventoTeclado={aoDigitar}  obj={objLivro}  remover={remover}  />

    </div>
  )
}

export default Shop;