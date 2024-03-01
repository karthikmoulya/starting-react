import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PokemonRow from './PokemonRow';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';

const PokemonTable = ({ onSelect }) => {
  const { pokemon, filter } = useContext(PokemonContext);
  return (
    <TableContainer component={Paper}>
      <Table aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon
            .filter((pokemon) =>
              pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
            )
            .slice(0, 20)
            .map((pokemon) => (
              <PokemonRow
                pokemon={pokemon}
                key={pokemon.id}
                onSelect={onSelect}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonTable;
