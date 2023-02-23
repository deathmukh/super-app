import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Register />
      {/* <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
