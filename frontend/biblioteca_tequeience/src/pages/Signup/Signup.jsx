import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar"


const Signup = () => {


  return (
    <>
  
    <div className="login-page">
    <h1>Livraria TQIence</h1>
    <div>
    <label>Usuário</label>
    <input />
    <label>Senha</label>
    <input type="password" />
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