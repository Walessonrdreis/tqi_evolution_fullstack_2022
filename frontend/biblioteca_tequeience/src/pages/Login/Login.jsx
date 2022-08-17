import React, {useEffect, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!loading && localStorage.getItem("token")!== null ) {
      navigate("/");
    }
  },[loading,navigate]);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("token","token");
      setLoading(false);
    },2000);
  };


  return (
    <>

    <div className="login-page">
      <h3>Login</h3>
      <div>
      <label>Usuário</label>
      <input />
      <label>Senha</label>
      <input type="password" />
      <div className="enter">
        {loading && <div className="loader"></div>}
        <button onClick={login}><Link className="link" to="/home">Entrar</Link></button>
        <button><Link className="link" to="/signup">Cadastro</Link></button>
      </div>
      </div>
    </div>
    </>
  );

};


export default Login;