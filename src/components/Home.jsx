import React from 'react';
import RandomDescription from './utilities/RandomDescription';

export default function Home() {
  const speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';

  return (
    <div className="home">
      <div className="bg-white w-100 h-[120px] flex justify-center items-center">
        <p className="text-center text-[30px] font-semibold">Bentornato, Utente!</p>
      </div>
      <div className="relative w-100 h-[160px] flex justify-center items-center wallpaperHome bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center font-semibold relative">
          <p className="mb-4">Ecco il tuo indovinello di oggi...</p>
          <RandomDescription />
          <p className="mt-4">Di che Pokémon sto parlando?</p>
        </div>
      </div>
    </div>
  );
}