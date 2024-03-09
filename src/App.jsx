import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import AuthLayout from "./components/Layouts/AuthLayout";
import PokemonDetails from "./components/utilities/PokemonDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import Pokedex from "./components/Pokedex";
import Teams from "./components/Teams";
import PokemonPage from "./components/PokemonPage";
import TeamPage from "./components/TeamPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teampage" element={<TeamPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route path="/pokemon/:id" Component={PokemonDetails}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
