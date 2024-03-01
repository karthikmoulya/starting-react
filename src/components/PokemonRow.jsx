import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const PokemonRow = ({ pokemon, onSelect }) => (
  <TableRow>
    <TableCell>{pokemon.name.english}</TableCell>
    <TableCell>{pokemon.type.join(', ')}</TableCell>
    <TableCell>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onSelect(pokemon)}
      >
        More Information
      </Button>
    </TableCell>
  </TableRow>
);

export default PokemonRow;
