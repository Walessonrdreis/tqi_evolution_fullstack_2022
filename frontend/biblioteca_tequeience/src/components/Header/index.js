
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../../pages/Home";

const Header = ()=>{

  return(
    <Router>
    
    <Routes>
      <Route path="/"element={<Home />}/>
    </Routes>

    </Router>
  )
}

export default Header;