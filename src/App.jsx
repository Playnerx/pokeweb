import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import AuthLayout from "./components/Layouts/AuthLayout";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<>Login</>}></Route>
        <Route path="/register" element={<>Register</>}></Route>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<>Pokémon</>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
