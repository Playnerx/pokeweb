import React, { useState, useEffect } from 'react';

const RandomDescription = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        let randomPokemonData;
        do {
          const randomPokemonId = Math.floor(Math.random() * 898) + 1;
          const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomPokemonId}/`);
          if (!pokemonResponse.ok) {
            throw new Error('Errore durante il recupero dei dettagli del Pokémon');
          }
          randomPokemonData = await pokemonResponse.json();
        } while (!hasItalianDescription(randomPokemonData));
        setRandomPokemon(randomPokemonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomPokemon();
  }, []);

  const hasItalianDescription = (pokemonData) => {
    const italianDescription = pokemonData.flavor_text_entries.find(entry => entry.language.name === 'it');
    return italianDescription !== undefined;
  };

  const handleUserAnswer = (event) => {
    setUserAnswer(event.target.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (!randomPokemon) return; // Assicurati che il Pokémon sia stato caricato correttamente
    const pokemonName = randomPokemon.name.toLowerCase();
    if (userAnswer === pokemonName) {
      setResultMessage(<span style={{color: '#90ee90'}}>Risposta Corretta!</span>);
    } else {
      setResultMessage(<span style={{color: '#f08080'}}>Risposta Sbagliata!</span>);
    }
  };

  if (!randomPokemon) {
    return <div>Caricamento...</div>;
  }

  return (
    <>
        <p className='text-[15px] sm:text-[16px] px-4 italic'>"{randomPokemon && randomPokemon.flavor_text_entries.find(entry => entry.language.name === 'it').flavor_text}"</p>
        <p className="mt-4">Di che Pokémon sto parlando?</p>
        <div className='inputFieldRandom w-[200px] mx-auto'>
          <input className="text-center" type="text" value={userAnswer} onChange={handleUserAnswer} onKeyPress={handleKeyPress} />
        </div>
        <div className="mt-5">
          <button className="buttonSite" onClick={checkAnswer}>Indovina</button>
        </div>
        {resultMessage && <p className='mt-4'>{resultMessage}</p>}
    </>
  );
};

export default RandomDescription;