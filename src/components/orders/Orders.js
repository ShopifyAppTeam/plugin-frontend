import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import AddIcon from '@mui/icons-material/Add';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Button, Hidden, Link, Stack, Typography, Box } from '@mui/material';
import { Form } from 'react-bootstrap';

function createData(id, service, merchant, status) {
    return { id, service, merchant, status };
}

function Orders() {
    const [rows, setRows] = useState([createData(7777, "myService", "valera", "unshipped"),
    createData(23847238472, "service2", "merchant2", "shipped")]);

    const getData = () => {
        // get orders from server
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='Orders'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>

                        <TableRow >
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Merchant</TableCell>
                            <TableCell align="right">Status</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {rows.map((row, rowInd) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.service}</TableCell>
                                <TableCell align="right">{row.merchant}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </div>
    )
}

export default Orders