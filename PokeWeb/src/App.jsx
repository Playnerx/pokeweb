import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route element={<Home />}> </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
