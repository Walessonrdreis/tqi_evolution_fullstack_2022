
import './App.css';
import './styles/Global.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup"
import SignLivros from "./pages/Signbooks/SignBooks"
import Shop from "./pages/Shop/Shop";
import Sellbooks from "./pages/SellBooks/SellBooks"


const PrivateRoute = ({children, redirectTo}) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth: ",isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo}/>;
}

function App() {
  
  return (
    
    <Router>
    <Routes>
        <Route path="/" element={<Login />}/>
    
        <Route path="/Home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/home/signup" element={
          <PrivateRoute redirectTo="/">
            <Signup />
          </PrivateRoute>
        }/>
        <Route path="/home/signbooks" element={
          <PrivateRoute redirectTo="/">
            <SignLivros />
          </PrivateRoute>
        }/>
        <Route path="/home/shop" element={
          <PrivateRoute redirectTo="/">
            <Shop />
          </PrivateRoute>
        }/>
        <Route path="/home/sellbooks" element={
          <PrivateRoute redirectTo="/">
            <Sellbooks />
          </PrivateRoute>
        }/>
      </Routes>

    </Router>
    

  );
}

export default App;
