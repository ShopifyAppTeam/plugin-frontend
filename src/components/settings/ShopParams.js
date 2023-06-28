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
import api from "../../api/axiousConfig";
import { HttpStatusCode } from 'axios';

// function createData(name, link, accessToken) {
// 	return { name, link, accessToken };
// }


export default function ShopParams() {
	const [rows, setRows] = useState([]);
	const getData = () => {
		async function callApi() {
			api.get("/user/shops").then((response) => {
				if (response.status == HttpStatusCode.Ok) {
					const obj = response.data;
					console.log(obj);
					setRows(response.data ? response.data : []);
				}
			}).catch((error) => {
				console.log(error);
			})
		}
		callApi();
	}
	useEffect(() => {
		getData();
	}, []);

	const handleDelete = (rowInd) => {
		setRows(rows.filter((_, ind) => {
			if (ind == rowInd) {

				api.get("user/delete_shop/" + rows[ind], {
					validateStatus: function (status) {
						return status < 500;
					}
				}).catch((error) => {
					console.log(error);
				});
				return false;
			}
			return true;
		})
		);

		// delete user shop to server
	};

	const [subdomain, setSubdomain] = useState("");

	const redirect_uri = (subdom) => {
		console.log("biba");
		// window.location.href = "http://localhost:3000";
		localStorage.setItem("through-track-plugin-add-subdomain", subdom);
		window.location.href = "https://"
			+ subdom
			+ ".myshopify.com/admin/oauth/authorize?client_id=62c60904ece30e9454ebd81fccc7882c&scope=%2Cread_orders%2Cread_assigned_fulfillment_orders%2Cread_draft_orders%2Cread_fulfillments%2Cread_products%2Cread_customers%2Cread_shipping&redirect_uri="
			+ "http://localhost:3000/redirect_handler";

	}

	const handleAdd = () => {
		console.log("biba");

		redirect_uri(subdomain);
		// post user shop to server
	}

	const validate = () => {
		return subdomain.length > 0;
	}

	const submit = (event) => {
		event.preventDefault();
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
									key={row}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row}
									</TableCell>
									<TableCell align="right"><Link href={row}>{row}</Link></TableCell>
									{/* <TableCell align="right">{row.accessToken}</TableCell> */}
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
				<Form onSubmit={submit} style={{ justifyContent: 'center', alignItems: 'center', maxWidth: '800px' }}>
					<Stack spacing={4} direction="column" style={{ justifyContent: 'center' }}>
						<Stack spacing={2} direction="row" style={{ justifyContent: 'center' }}>
							<Form.Group size="lg" controlId='subdomain' style={{ justifyContent: 'center' }}>
								<Typography component="div">
									<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
										Subdomain
									</Box>
								</Typography>
								<Form.Control
									autoFocus
									type="subdomain"
									value={subdomain}
									onChange={(e) => setSubdomain(e.target.value)}
								/>
							</Form.Group>

						</Stack>
						<Button startIcon={<AddIcon />} onClick={handleAdd} variant="contained" size="lg" type="submit" disabled={!validate()}>
							Add shop
						</Button>
					</Stack>
				</Form>
			</Stack >
		</div >
	);
}