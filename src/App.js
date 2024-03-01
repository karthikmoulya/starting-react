import styled from '@emotion/styled';

import './App.css';
import { useEffect, useState } from 'react';
import PokemonIfo from './components/PokemonInfo';
import PokemonFilter from './components/PokjemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 90vw;
  padding-top: 1rem;
`;

function App() {
  const [filter, filterSet] = useState('');
  const [pokemon, pokemonSet] = useState([]);
  const [selectedItem, selectedItemSet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(
          'http://localhost:3000/starting-react/pokemon.json'
        );
        const data = await resp.json();
        pokemonSet(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const onSelect = (pokemon) => {
    selectedItemSet(pokemon);
  };
  return (
    <PokemonContext.Provider
      value={{
        filter,
        filterSet,
        pokemon,
        selectedItem,
        pokemonSet,
        selectedItemSet,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable onSelect={onSelect} />
          </div>
          <PokemonIfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
