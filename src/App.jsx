import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import HomePage from "./Pages/HomePage"
import Product from "./Pages/Product"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<HomePage />} />} />
        <Route path="/product/:id" element={<Layout children={<Product />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
