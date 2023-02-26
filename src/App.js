import Register from "./Pages/Register/Register"
import Cards from "./Pages/Cards/Cards"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <Register />
      <Cards /> */}
      <BrowserRouter>
      <Routes path="/">
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Cards />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
