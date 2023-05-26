import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import ViewProduct from "./ViewProduct";
import Header from "./Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/view/:id" element={<ViewProduct />} />
      </Routes>
    </>
  );
}

export default App;
