import React from 'react';
import iconSearch from '../components/assets/img/black-search-icon-png-8.jpg';
import iconRandom from '../components/assets/img/dice-solid.png';
import iconDown from '../components/assets/img/chevron-down-solid.png';
import Card from './utilities/Cards/Card';

export default function Pokedex() {
  return (
    <>
      <div className="relative w-full h-[160px] flex justify-center items-center wallpaperPokedex bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center font-semibold relative">
          <p className="px-15 mb-4 text-sm md:text-base">Cerca un Pokémon per nome o per numero del Pokédex.</p>
          <div className='mx-auto bg-white rounded-[30px] md:w-[500px] w-full py-1 flex items-center pl-4 pr-14'>
            <input className='text-[12px] sm:text-[16px] outline-none focus:outline-none text-[black] italic w-full bg-transparent placeholder-[12px] md:placeholder-[16px] text-left' type='text' placeholder='Inserisci il nome o il numero del Pokémon' />
            <img className='w-[50px] md:w-[70px] absolute right-0 mr-0' src={iconSearch} alt="Icon Search" />
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[100%] mx-auto'>


          {/* PULSANTI */}

          <div className='w-full md:w-auto flex flex-col md:flex-row justify-center items-center mt-8'>
            <div className='relative bg-[#B70909] w-[220px] md:w-[220px] mx-auto mb-4 md:mb-0 rounded flex items-center'>
              <a href='#' className='block px-3 py-2 text-white text-[16px] font-semibold'>
                <div className="flex items-center">
                  Generatore casuale
                  <img className='w-[28px] md:w-[32px] ml-3' src={iconRandom} alt="Icon Random" />
                </div>
              </a>
            </div>

            <div className='relative bg-[#B70909] w-[220px] md:w-[220px] mx-auto rounded flex items-center md:ml-4'>
              <a href='#' className='block px-3 py-2 text-white text-[16px] font-semibold'>
                <div className="flex items-center">
                  Ordine Crescente
                  <img className='w-[18px] md:w-[22px] ml-10' src={iconDown} alt="Icon Down" />
                </div>
              </a>
            </div>
          </div>

          {/* POKEMON */}

          <div className='homePokedex mt-12 mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
              {Array(9).fill(null).map((el, index) => (
                <div className="mb-10" key={index}>
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