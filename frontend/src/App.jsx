import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Form from "./components/Pricing/Form"
import "../src/index.css"


function App() {


  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
    </Routes>
    </div>
  )
}

export default App
