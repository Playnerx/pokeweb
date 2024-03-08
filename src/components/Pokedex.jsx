import React from 'react';
import iconSearch from '../components/assets/img/black-search-icon-png-8.jpg';
import iconRandom from '../components/assets/img/dice-solid.png';
import iconDown from '../components/assets/img/chevron-down-solid.png';
import Card from './utilities/Cards/Card';

export default function Pokedex() {
  return (
    <>
      <div className="relative w-100 h-[160px] flex justify-center items-center wallpaperPokedex bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center font-semibold relative">
          <p className="mb-4">Cerca un Pokémon per nome o per numero del Pokédex.</p>
          <div className='cursor-pointer bg-white rounded-[30px] w-[550px] py-1 flex items-center pl-4 pr-14'>
            <input className='outline-none focus:outline-none text-[black] italic w-full bg-transparent' type='text' placeholder='Inserisci il nome o il numero del Pokémon' />
            {/* Imposta l'immagine come posizione assoluta */}
            <img className='w-[50px] absolute right-0 mr-2' src={iconSearch} alt="Icon Search" />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[100%] mx-auto'>

          <div className='w-auto flex justify-center items-center mt-8'>
            <div className='relative bg-[#B70909] w-[220px] mx-auto rounded flex items-center'>
              <a href='#' className='block px-3 py-2 text-white text-[16px] font-semibold'>Generatore casuale</a>
              <img className='w-[28px] absolute right-0 mr-3' src={iconRandom} alt="Icon Random" />
            </div>

            <div className='relative bg-[#B70909] w-[220px] mx-auto rounded flex items-center'>
              <a href='#' className='block px-3 py-2 text-white text-[16px] font-semibold'>Ordine Crescente</a>
              <img className='w-[18px] absolute right-0 mr-3' src={iconDown} alt="Icon Random" />
            </div>
          </div>

          <div className='homePokedex mt-16 mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
              {Array(9).fill(null).map((el, index) => (
                <div className="w-full px-2 mb-10" key={index}>
                  <Card></Card>
                </div>
              ))}
            </div>
            <div className='bg-[#B70909] w-[140px] mx-auto rounded text-center'>
              <a href='#' className='block px-2 py-1 text-white text-[18px] font-semibold'>Carica altro</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}