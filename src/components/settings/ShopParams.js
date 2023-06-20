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
import './ShopParams.css';

function createData(name, link, accessToken) {
	return { name, link, accessToken };
}


export default function ShopParams() {
	const [rows, setRows] = useState([createData("1", "http://localhost:3000", "123123")]);
	const getData = () => {
		// get user shops from server
	}
	useEffect(() => {
		getData();
	}, []);

	const handleDelete = (rowInd) => {
		setRows((prevRows) =>
			prevRows.filter((_, ind) => ind !== rowInd)
		);
		// delete user shop to server
	};

	const handleAdd = () => {
		// post user shop to server
	}

	const validate = () => {

	}

	return (
		<div className='ShopParams'>
			<Stack spacing={10} direction={"column"} style={{ justifyContent: "center", alignItems: 'center' }}>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>

							<TableRow >
								<TableCell>Shop</TableCell>
								<TableCell align="right">Link</TableCell>
								<TableCell align="right">AccessToken</TableCell>

							</TableRow>

						</TableHead>
						<TableBody>
							{rows.map((row, rowInd) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="right"><Link href={row.link}>{row.link}</Link></TableCell>
									<TableCell align="right">{row.accessToken}</TableCell>
									<TableCell align="right">
										<Button
											variant="outlined"
											color="error"
											onClick={() => handleDelete(rowInd)}
										>
											Delete
										</Button>
									</TableCell>

								</TableRow>
							))}
						</TableBody>
					</Table>

				</TableContainer>
				<Form onSubmit={handleAdd} style={{ justifyContent: 'center', alignItems: 'center', maxWidth: '800px' }}>
					<Stack spacing={4} direction="column" style={{ justifyContent: 'center' }}>
						<Stack spacing={2} direction="row" style={{ justifyContent: 'center' }}>
							<Form.Group size="lg" controlId='name' style={{ justifyContent: 'center' }}>
								<Typography component="div">
									<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
										Name
									</Box>
								</Typography>
								<Form.Control
								/>
							</Form.Group>
							<Form.Group size="lg" controlId='link'>
								<Typography component="div">
									<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
										Link
									</Box>
								</Typography>
								<Form.Control

								/>
							</Form.Group>
							<Form.Group size="lg" controlId='accesstoken'>
								<Typography component="div">
									<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
										AccessToken
									</Box>
								</Typography>
								<Form.Control

								/>
							</Form.Group>

						</Stack>
						<Button startIcon={<AddIcon />} variant="contained" size="lg" type="submit" disabled={!validate()}>
							Add shop
						</Button>
					</Stack>
				</Form>
			</Stack>
		</div>
	);
}