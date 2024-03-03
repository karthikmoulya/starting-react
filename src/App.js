import styled from '@emotion/styled';
import { useEffect, useReducer } from 'react';

import './App.css';
import PokemonIfo from './components/PokemonInfo';
import PokemonFilter from './components/PokjemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: '',
    selectedItem: null,
  },
  action
) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

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
  // const [filter, filterSet] = useState('');
  // const [pokemon, pokemonSet] = useState([]);
  // const [selectedItem, selectedItemSet] = useState(null);
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: '',
    pokemon: [],
    selectedItem: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(
          'http://localhost:3000/starting-react/pokemon.json'
        );
        const data = await resp.json();
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!state.pokemon) {
    return <div>Loading data</div>;
  }
  return (
    <PokemonContext.Provider
      value={{
        // filter,
        // filterSet,
        // pokemon,
        // selectedItem,
        // pokemonSet,
        // selectedItemSet,
        state,
        dispatch,
      }}
    >
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonIfo />
        </TwoColumnLayout>
      </Container>
    </PokemonContext.Provider>
  );
}

export default App;
