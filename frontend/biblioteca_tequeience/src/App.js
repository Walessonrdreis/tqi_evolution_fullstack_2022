
import './App.css';
import './styles/Global.css'
import {useContext} from "react";
import {themeContext} from "./Context";
import Header from "./components/Header";
import Navbar from "./components/Navbar"


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    
    <div className="App"
     style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
    <Header />
    <Navbar />
    </div>
  );
}

export default App;
