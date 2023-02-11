import { Box } from "@chakra-ui/react";
import { Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <Container style={{ marginBottom: 60 }}>
      <Stack spacing={3}>
        <AccountCircleIcon
          style={{ width: 100, height: 100, margin: "auto", display: "block" }}
        ></AccountCircleIcon>
        <Typography variant="h4">Login</Typography>
        <TextField
          id=""
          name=""
          label="Email Adress "
          placeholder="Email Adress"
          color="success"
          fullWidth
        ></TextField>
       <FormControl  sx={{ m: 1 }} variant="outlined">
          
          <InputLabel color="success"  htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
        color="success"
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
        <Button
          type="submit"
           style={{marginBottom:68}}
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </Stack>
    </Container>
  );
}
