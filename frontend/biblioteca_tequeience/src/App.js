
import './App.css';
import './styles/Global.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";


const PrivateRoute = ({children, redirectTo}) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth: ",isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo}/>;
}

function App() {
  
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}/>
    
        <Route path="/Home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>

    </BrowserRouter>
    

  );
}

export default App;
