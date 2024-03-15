import React, { useEffect, useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/pokemon/all')
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

    return (
        <>
            <div>
                <h1>Lista dei Pokemon</h1>
                <ul>
                    {pokemons.map(pokemon => (
                        <li key={pokemon.id}>{pokemon.identifier} {pokemon.species_id}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default PokemonList;
