import Card from './utilities/Cards/Card';
import Team from './utilities/Teams/Team';
import RandomDescription from './utilities/RandomDescription';
import { NavLink } from 'react-router-dom';

export default function Home() {

  return (
    <div className="home">
      <div className="backgroundUser w-100 h-[120px] flex justify-center items-center">
        <p className="text-center text-[30px] font-semibold">Bentornato, Utente!</p>
      </div>

      {/* Random Home */}

      <div className="relative w-100 h-[160px] flex justify-center items-center wallpaperHome bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white text-center font-semibold relative">
          <p className="mb-4">Ecco il tuo indovinello di oggi...</p>
          <RandomDescription />
          <p className="mt-4">Di che Pokémon sto parlando?</p>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[100%] mx-auto'>

          {/* Pokédex Home */}

          <div className='homePokedex mt-10 mb-10'>
            <p className='text-[20px] font-semibold mb-4 text-center'>Dai un'occhiata a questi Pokémon...</p>
            <div className='flex flex-wrap justify-center lg:justify-between'>
              {Array(4).fill(null).map((el, index) => (
                <div className="w-full lg:w-1/2 xl:w-1/4 px-2 mb-4" key={index}> {/* Imposta la larghezza della card */}
                  <Card></Card>
                </div>
              ))}
            </div>
            <div className='bg-[#B70909] w-[140px] mx-auto rounded text-center'>
               <NavLink to="/pokedex" className='block px-2 py-1 text-white text-[18px] font-semibold'>Scopri altro</NavLink>
            </div>
          </div>

          {/* Team Home */}

          <p className='text-[20px] font-semibold mb-4 text-center'>Dai un'occhiata ai tuoi Team!</p>
          <Team></Team>

          <div className='bg-[#B70909] w-[140px] mx-auto rounded text-center mb-10'>
              <NavLink to="/teams" className='block px-2 py-1 text-white text-[18px] font-semibold'>Vai ai team</NavLink>
            </div>

        </div>
      </div>

    </div>
  );
}