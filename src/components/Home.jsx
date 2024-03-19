import Card from './utilities/Cards/Card';
import Team from './utilities/Teams/Team';
import RandomDescription from './utilities/RandomDescription';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useEffect, useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Home() {

  const { userData } = useAuth();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/pokemon')
        .then(response => {
            if (!response.ok) {
                throw new Error('Request Error');
            }
            return response.json();
        })
        .then(data => {
            setPokemons(data);
            console.log(data);
        })
        .catch(error => {
            console.log('Si è verificato un errore:', error);
        });
  }, []);

  const getRandomPokemon = () => {
    const shuffledPokemons = [...pokemons].sort(() => Math.random() - 0.5);
    return shuffledPokemons.slice(0, 4);
  }

  return (
    <div className="home">
      <div className="backgroundUser w-100 h-[120px] flex justify-center items-center">
        <p className="text-center text-[30px] font-semibold">Bentornato, {userData?.user?.username}!</p>
      </div>

      {/* Random Home */}

      <div className="relative w-100 h-[300px] flex justify-center items-center wallpaperHome bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='text-white text-center font-semibold relative'>
          <p className="mb-4">Ecco il tuo indovinello di oggi...</p>
          <RandomDescription></RandomDescription>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[100%] mx-auto'>

          {/* Pokédex Home */}

          <div className='homePokedex mt-10 mb-10'>
            <p className='text-[20px] font-semibold mb-4 text-center'>Dai un'occhiata a questi Pokémon...</p>
            <div className='flex flex-wrap justify-center lg:justify-between md:px-28 xl:px-0'>
              {getRandomPokemon().map((pokemon, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/4 mb-10" key={index}>
                  <Card pokemonName={pokemon.nome} pokemonID={pokemon.id} pokemonType1={pokemon.tipo1} pokemonType2={pokemon.tipo2} pokemonGen={pokemon.generazione}></Card>
                </div>
              ))}
            </div>
            <div className='buttonSite w-[140px] mx-auto rounded text-center'>
              <NavLink to="/pokedex" className='block'>Scopri altro</NavLink>
            </div>
          </div>

          {/* Team Home */}

          <p className='text-[20px] font-semibold mb-4 text-center'>Dai un'occhiata ai tuoi Team!</p>
          <Team></Team>

          <div className='buttonSite w-[140px] mx-auto rounded text-center mb-10'>
            <NavLink to="/teams" className='block'>Vai ai team</NavLink>
          </div>

        </div>
      </div>

    </div>
  );
}