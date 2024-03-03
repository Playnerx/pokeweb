import React, { useState, useEffect } from 'react';

const RandomDescription = () => {
  const [randomDescription, setRandomDescription] = useState('');

  useEffect(() => {
    const fetchRandomDescription = async () => {
      try {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1;
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId}/`);
        if (!pokemonResponse.ok) {
          throw new Error('Errore durante il recupero dei dettagli del Pokémon');
        }
        const pokemonData = await pokemonResponse.json();

        const italianDescription = pokemonData.flavor_text_entries.find(entry => entry.language.name === 'it');
        
        if (italianDescription) {
          setRandomDescription(italianDescription.flavor_text);
        } else {
          const englishDescription = pokemonData.flavor_text_entries.find(entry => entry.language.name === 'en');
          setRandomDescription(englishDescription.flavor_text);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomDescription();
  }, []);

  return (
    <div>
      <p className='italic'>"{randomDescription}"</p>
    </div>
  );
};

export default RandomDescription;