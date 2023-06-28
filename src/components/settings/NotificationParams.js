import { Stack, Box, Paper, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { styled } from '@mui/material/styles';


function NotificationParams() {
	const [param, setParam] = useState("");
	const [value, setValue] = useState("");

	const [current, setCurrent] = useState(["12", "48", "6"]);


	const handleSubmit = () => {
		// post updated to server
	}
	return (
		<div className='NotificationParams'>
			<Stack spacing={4} direction="column" >
				<Form onSubmit={handleSubmit}>
					<Stack spacing={2} direction="row">
						<Form.Group size="lg" controlId='Order update interval' style={{ justifyContent: 'center' }}>
							<Typography component="div">
								<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
									Order update unterval
								</Box>
							</Typography>
							<Form.Control
							/>
						</Form.Group>
						<Button>Set</Button>
						<Typography component="div" >
							<Box sx={{ fontFamily: 'Monospace', fontSize: 14, m: 3 }}>
								Current value is {current[0]} hours
							</Box>
						</Typography>
					</Stack>
				</Form>
				<Form onSubmit={handleSubmit}>
					<Stack spacing={2} direction="row">
						<Form.Group size="lg" controlId='Warehouse shipping delay' style={{ justifyContent: 'center' }}>
							<Typography component="div">
								<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
									Warehouse shipping delay
								</Box>
							</Typography>
							<Form.Control
							/>
						</Form.Group>
						<Button>Set</Button>
						<Typography component="div" >
							<Box sx={{ fontFamily: 'Monospace', fontSize: 14, m: 3 }}>
								Current value is {current[1]} hours
							</Box>
						</Typography>
					</Stack>
				</Form>
				<Form onSubmit={handleSubmit}>
					<Stack spacing={2} direction="row">
						<Form.Group size="lg" controlId='Email notifications interval' style={{ justifyContent: 'center' }}>
							<Typography component="div">
								<Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
									Email notifications interval
								</Box>
							</Typography>
							<Form.Control
							/>
						</Form.Group>
						<Button>Set</Button>
						<Typography component="div" >
							<Box sx={{ fontFamily: 'Monospace', fontSize: 14, m: 3 }}>
								Current value is {current[2]} hours
							</Box>
						</Typography>
					</Stack>
				</Form>
			</Stack>
		</div >
	)
}

export default NotificationParams