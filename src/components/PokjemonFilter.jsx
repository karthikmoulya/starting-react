import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';

const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);
  return (
    <TextField
      fullWidth
      id='outlined-basic'
      label='Pokemon'
      variant='outlined'
      value={filter}
      onChange={(e) => filterSet(e.target.value)}
    />
  );
};

export default PokemonFilter;
