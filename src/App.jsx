import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<HomePage />} />} />
        <Route
          path="/product/:id"
          element={<Layout children={<Product />} />}
        />
        <Route path="/shop" element={<Layout children={<Shop />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
