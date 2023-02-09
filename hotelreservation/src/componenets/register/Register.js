import { Box } from "@chakra-ui/react";
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          label="Phone Number"
          placeholder="Phone Number"
          type={"tel"}
          color="success"
          fullWidth
        ></TextField>
        <FormControl color="success"  sx={{ m: 1 }} variant="outlined">
          
          <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
        
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button type="submit" variant="contained" color="secondary">
          Register
        </Button>
      </Stack>
    </Container>
  );
}
