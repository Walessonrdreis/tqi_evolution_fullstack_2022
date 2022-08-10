import React from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/Navbar";




const Home = () => {


  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");
    navigate("/");

  }
  return (
      <>
        <Header />
        <Navbar />
        <button onClick={logout}>Logout</button>
      </>
     
   
  )
}

export default Home;