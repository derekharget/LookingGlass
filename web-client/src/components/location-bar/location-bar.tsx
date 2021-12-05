import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    { name: 'Chicago' },
    { name: 'New York' },
    { name: 'Seattle' },
    { name: 'Detroit' },
    { name: 'Dallas, Texas' },
];

export default function LocationBar() {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 150 }}
                size="small"
                aria-label="Location Table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Locations:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
