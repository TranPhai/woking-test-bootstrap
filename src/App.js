import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/products" element = {<Products/>} />
        </Routes>
    </div>
  );
}

export default App;
