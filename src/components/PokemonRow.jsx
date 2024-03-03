import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const PokemonRow = ({ pokemon, onClick }) => (
  <TableRow>
    <TableCell>{pokemon.name.english}</TableCell>
    <TableCell>{pokemon.type.join(', ')}</TableCell>
    <TableCell>
      <Button
        variant='contained'
        color='primary'
        onClick={() => onClick(pokemon)}
      >
        More Information
      </Button>
    </TableCell>
  </TableRow>
);

export default PokemonRow;
