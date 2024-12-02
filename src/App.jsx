import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/productview" element={<ViewProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
