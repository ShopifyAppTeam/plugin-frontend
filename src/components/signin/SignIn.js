import Button from "@mui/material/Button";
import React from 'react'
import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import "./SignIn.css";
import { Stack, Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faShopify } from "@fortawesome/free-brands-svg-icons";

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const submit = (event) => {
        event.preventDefault();
    }

    const validate = () => {
        return email.length > 0 && password.length > 0;
    }


    const handleOauth = (link) => {
        window.location.replace(link);
    }

    return (
        <div className='SignIn'>
            <Form onSubmit={submit} style={{ justifyContent: 'center' }}>
                <Stack spacing={4} direction="column">
                    <Stack spacing={2} direction="column">
                        <Form.Group size="lg" controlId='email' style={{ justifyContent: 'center' }}>
                            <Typography component="div">
                                <Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
                                    EMAIL
                                </Box>
                            </Typography>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId='password'>
                            <Typography component="div">
                                <Box sx={{ fontFamily: 'Monospace', fontSize: 12, m: 1 }}>
                                    PASSWORD
                                </Box>
                            </Typography>
                            <Form.Control
                                autoFocus
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="contained" size="lg" type="submit" disabled={!validate()}>
                            Login
                        </Button>
                    </Stack>
                    <Stack spacing={2} direction="column">
                        <Button href="http://localhost:8080/oauth2/authorization/google" color="secondary" variant="outlined" startIcon={<FontAwesomeIcon icon={faGoogle} />}>
                            Login with Google
                        </Button>
                        <Button color="secondary" variant="outlined" startIcon={<FontAwesomeIcon icon={faShopify} />}>
                            Login with Shopify
                        </Button>
                    </Stack>
                </Stack>
            </Form>
        </div>
    )
}

export default SignIn