import React, { useEffect, useState } from 'react';
import iconSearch from '../components/assets/img/black-search-icon-png-8.jpg';
import iconRandom from '../components/assets/img/dice-solid.png';
import switchIcon from '../components/assets/img/switch.png';
import Card from './utilities/Cards/Card';
import LoadingPokeball from './utilities/LoadingPokeball';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [visiblePokemons, setVisiblePokemons] = useState(9);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('none');

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

    // Aggiungi 9 al numero di Pokémon visibili
    const loadMorePokemons = () => {
        setVisiblePokemons(prevVisiblePokemons => prevVisiblePokemons + 9);
    };

    // Funzione per filtrare i Pokémon in base al nome o all'ID
    const filteredPokemons = pokemons.filter(pokemon_data =>
        pokemon_data.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
        pokemon_data.id.toString().includes(searchValue)
    );

    // Funzione per randomizzare l'elenco
    const randomPokemons = () => {
        setLoading(true); // Attiva l'animazione di caricamento
        setTimeout(() => {
            const randomPokemons = [...pokemons].sort(() => Math.random() - 0.5);
            setPokemons(randomPokemons);
            setLoading(false); // Disattiva l'animazione di caricamento dopo il ritardo
        }, 1000); // Cambia il valore a seconda di quanto tempo vuoi mantenere l'animazione
    };

    // Funzione per ordinare i Pokémon in base all'ID
    const sortPokemons = (type) => {
        let sortedPokemons = [...pokemons];
        if (type === 'desc') {
            sortedPokemons.sort((a, b) => a.id - b.id);
        } else if (type === 'asc') {
            sortedPokemons.sort((a, b) => b.id - a.id);
        }
        setPokemons(sortedPokemons);
        setSortType(type);
    };

    return (
        <>

            {loading && <LoadingPokeball />}
            <div className="relative w-full h-[160px] flex justify-center items-center wallpaperPokedex bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="text-white text-center font-semibold relative">
                    <p className="px-15 mb-4 text-sm md:text-base">Cerca un Pokémon per nome o per numero del Pokédex.</p>
                    <div className='mx-auto bg-white rounded-[30px] md:w-[500px] w-full py-1 flex items-center pl-4 pr-14'>
                        <input
                            className='text-[12px] sm:text-[16px] outline-none focus:outline-none text-[black] italic w-full bg-transparent placeholder-[12px] md:placeholder-[16px] text-left'
                            type='text'
                            placeholder='Inserisci il nome o il numero del Pokémon'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} // Aggiornamento dello stato per il valore di ricerca
                        />
                        <img className='w-[50px] md:w-[70px] absolute right-0 mr-0' src={iconSearch} alt="Icon Search" />
                    </div>
                </div>
            </div>


            <div className='w-full flex justify-center'>
                <div className='w-[1000px] h-[100%] mx-auto'>


                    {/* PULSANTI */}

                    <div className='w-full md:w-auto flex flex-col md:flex-row justify-center items-center mt-8'>
                        <div className='relative buttonActions w-[220px] md:w-[220px] mx-auto mb-4 md:mb-0 rounded flex items-center'>
                            <button onClick={randomPokemons} className='block px-3 py-2 text-white text-[16px] font-semibold'>
                                <div className="flex items-center">
                                    Generatore casuale
                                    <img className='w-[28px] md:w-[32px] ml-3' src={iconRandom} alt="Icon Random" />
                                </div>
                            </button>
                        </div>

                        <div className="relative buttonActions w-[250px] md:w-[220px] mx-auto mb-4 md:mb-0 rounded">
                            <div className="flex items-center">
                                <button className="flex items-center mx-auto px-3 py-2 text-white text-[16px] font-semibold" onClick={() => sortPokemons(sortType === 'asc' ? 'desc' : 'asc')}>
                                    Ordine {sortType === 'asc' ? 'Crescente' : 'Decrescente'}
                                    <img className='w-[18px] md:w-[22px] ml-2' src={switchIcon} alt="Icon Down" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* POKEMON */}

                    <div className='homePokedex mt-12 mb-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                            {filteredPokemons.slice(0, visiblePokemons).map((pokemon) => (
                                <div className="mb-10" key={pokemon.id}>
                                    <Card pokemonName={pokemon.nome} pokemonID={pokemon.id} pokemonType1={pokemon.tipo1} pokemonType2={pokemon.tipo2} pokemonGen={pokemon.generazione}/>
                                </div>
                            ))}
                        </div>
                        <div className='w-[140px] mx-auto rounded text-center'>
                            <button onClick={loadMorePokemons} className='buttonSite'>Carica altro</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Pokedex;
