
import './App.css';
import './styles/Global.css'
import {useContext, useState} from "react";
import {themeContext} from "./Context";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown/Dropdown"


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectedItem, setselectedItem] = useState(null);
  
  return (
    
    <div className="App"
     style={{ 
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
   <Header />
    <Navbar />
    {selectedItem && <div>Item selecionado: {selectedItem}</div>}
    <Dropdown 
      title="Selecione aqui"
      options={["Categorias","Favoritos", "opções", "Contato"]}
      onSelect={setselectedItem}
    />
    </div>
  );
}

export default App;
