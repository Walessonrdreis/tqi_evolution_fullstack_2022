import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar"


const Signup = () => {


  return (
    <>
  
    <div className="login-page">
    <h3>Cadastre-se</h3>
    <div>
    <label>Nome</label>
    <input type="text" placeholder="Nome" />
    <label>Sobrenome</label>
    <input type="text" placeholder="Sobrenome" />
    <label>Email</label>
    <input type='email' placeholder="Email" />
    <label>Senha</label>
    <input type="password" placeholder="***********" />
    <div className="enter">
      <button>Signup</button>
    </div>
    </div>
    <button onClick="onClick"> <Link to="/" className="link">logout</Link></button>
  </div>
    </>
      
  )
}

export default Signup;