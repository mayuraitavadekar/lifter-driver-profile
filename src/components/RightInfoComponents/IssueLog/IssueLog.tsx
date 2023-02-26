import HeadingWithCSV from '../../commonComponents/HeadingWithCSV/HeadingWithCSV'
import "./IssueLog.css"

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
  date: string,
  issue: string,
  note: string,
) {
  return { date, issue, note };
}

// rows array
const rows = [
  createData('Jan. 19', "Headlight of Toyota Corrola is not working", "-"),
  createData('Jan. 21', "Camry 3024 Tires repair", "-"),
  createData('Jan. 23', "Discover credit not recovered", "-"),
  createData('Jan. 27', "Automatically cancelled two rides", "-"),
];

export default function IssueLog() {
  return (
    <div className='issue-log-main-div'>
        
        <HeadingWithCSV headingName={"Issue Log"} />

        <div className='table-main-div'>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="left">Issue</TableCell>
                  <TableCell align="right">Note</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell className='truncate' align="left">{row.issue}</TableCell>
                    <TableCell align="right">{row.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

    </div>
  )
}
