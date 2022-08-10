import React,{useState} from 'react';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';


const SignLivos = () => {
  const [btnCadastrar, setbtnCadastrar] = useState(true);
  return (
    <div>
    <h1>Cadastro de Livros</h1>
      <Form button={btnCadastrar}/>
      <Table />
      
    </div>
  )
}

export default SignLivos