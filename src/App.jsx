import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route index element={<Home/>}/>
          <Route path="/product" element={<Products/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
