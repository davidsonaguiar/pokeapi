import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card.js';
import Search from './Search';

function App() {

  const [ value, setValue ] = useState('1');
  const [ pokemon, setPokemon ] = useState({});
  
  const URL = str => `https://pokeapi.co/api/v2/pokemon/${str}/`;

  const alterValue = str => setValue(str);

  const getData = (url) => {
    fetch(url)
      .then(req => req.json())
      .then(resp => setPokemon(resp))
      .catch(() => setPokemon({
        name: 'Nao Localizado',
        id: 0,
        height: 0,
        weight: 0,
        abilities: [{ability: {name: 'none'}}],
        types: [{type: {name: 'unknown'}}],
        stats: [{base_stat: 0, stat: {name: 'none'}}]
      }))
  }

  useEffect(() => {
    getData(URL(value))
  }, [value]);


  return (
    <div className='app'>
      <header>
        <Search func={alterValue}/>
      </header>
      <main>
        <Card name={pokemon.name} 
              id={pokemon.id}
              types={pokemon.types}
              height={pokemon.height}
              weight={pokemon.weight}
              abilities={pokemon.abilities}
              stats={pokemon.stats}
              func={alterValue}/>
      </main>
    </div>
  );
}

export default App;
