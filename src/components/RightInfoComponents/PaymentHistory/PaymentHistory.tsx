import "./PaymentHistory.css"
import HeadingWithCSV from '../../commonComponents/HeadingWithCSV/HeadingWithCSV';

// material ui imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// return object of items
function createData(
  when: string,
  price: string,
  distance: string,
) {
  return { when, price, distance };
}

// rows array
const rows = [
  createData('Jan. 19 - Jan. 25', "$925", "175.5 mi"),
  createData('Feb. 03 - Feb. 08', "$989", "175.5 mi"),
  createData('Feb. 09 - Feb. 11', "$295", "175.5 mi"),
  createData('Mar. 15 - Mar. 25', "$998", "175.5 mi"),
  createData('Mar. 25 - Mar. 29', "$915", "175.5 mi")
];

export default function PaymentHistory() {
  return (
    <div className='payment-history-main-div'>

        <HeadingWithCSV headingName={"Payment History"} />
    
        <div className='table-main-div'>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>When</TableCell>
                  <TableCell align="center">Price&nbsp;($)</TableCell>
                  <TableCell align="right">Distance&nbsp;(mi)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.when}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.when}
                    </TableCell>
                    <TableCell className='price-cell' align="center">{row.price}</TableCell>
                    <TableCell align="right">{row.distance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    </div>
  )
}
