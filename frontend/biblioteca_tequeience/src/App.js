
import './App.css';
import './styles/Global.css';
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {darkTheme,lightTheme,GlobalStyles } from "./styles/Global";
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup"
import SignLivros from "./pages/Signbooks/SignBooks"
import Shop from "./pages/Shop/Shop";
import Sellbooks from "./pages/SellBooks/SellBooks"
import ToggleBtn from './components/TogleBtn/ToggleBtn';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import BookDetail from './pages/BookDetail/BookDetail';
import Cart from './components/Cart/Cart';






function App() {
  
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  const addToCart = (obj) => {
    let CartLivro = cart;
    CartLivro = [...CartLivro, obj];
    setCart(CartLivro);
  };

  
  return (


    <ThemeProvider  theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <div onClick={switchTheme}>
        <ToggleBtn />
        </div>
      </div>


    <Router>
    <Header />
    <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />}/>
        <Route path="/bookDetail/:id" element={<BookDetail addCart={addToCart}/>}/>
        <Route path="/livrocart" element={<Cart cartList={cart}/>}/>
              

        <Route path="/signup" element={<Signup />} />
        <Route path="/signbooks" element={<SignLivros />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sellbooks" element={<Sellbooks />} />
      </Routes>
    </Router>
    </ThemeProvider>


  );
}

export default App;
