import { BrowserRouter, Route, Routes, ScrollRestoration } from "react-router-dom"
import Layout from "./Layout/Layout"
import HomePage from "./Pages/HomePage"
import Product from "./Pages/Product"
import Shop from "./Pages/Shop"
import PanierPage from "./Pages/PanierPage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout children={<HomePage />} />} />
          <Route path="/product/:id" element={<Layout children={<Product />} />} />
          <Route path="/shop" element={<Layout children={<Shop />} />} />
          <Route path="/panier" element={<Layout children={<PanierPage />} />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      
    </>

  )
}

export default App
