import { Box } from "@chakra-ui/react";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Register() {
  return (
    <Container style={{ marginTop: 10 }}>
      <Stack spacing={3}>
        <AccountCircleIcon
          style={{ width: 100, height: 100, margin: "auto", display: "block" }}
        ></AccountCircleIcon>
        <Typography variant="h4">Register</Typography>
        <TextField
          id=""
          name=""
          label="User Name"
          placeholder="User Name"
          color="success"
          fullWidth
        ></TextField>
        <TextField
          id=""
          name=""
          label="Email Adress "
          placeholder="Email Adress"
          color="success"
          fullWidth
        ></TextField>
        <TextField
          id=""
          name=""
          label="Password"
          placeholder="Pasword"
          color="success"
          fullWidth
        ></TextField>
        <Button
          type="submit"
          // style={{ width: 100, margin: "auto", display: "block" }}
          variant="contained"
          color="secondary"
        >
          Register
        </Button>
      </Stack>
    </Container>
  );
}
