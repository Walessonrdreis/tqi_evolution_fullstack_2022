import React from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";



const Home = () => {


  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");
    navigate("/");

  }
  return (
      <>
  
        <button onClick={logout}>Logout</button>
      </>
     
   
  )
}

export default Home;