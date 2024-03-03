import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';

const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <TextField
      fullWidth
      id='outlined-basic'
      label='Pokemon'
      variant='outlined'
      value={filter}
      onChange={(e) =>
        dispatch({
          type: 'SET_FILTER',
          payload: e.target.value,
        })
      }
    />
  );
};

export default PokemonFilter;
