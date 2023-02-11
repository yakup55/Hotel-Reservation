import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Box } from "@chakra-ui/react";
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';

export default function ReservationInquire() {
 
  return (
    <div>
        
      <FormControl style={{ width: 300 }} sx={{ m: 1 ,mt:4}}  variant="standard">
        <TextField
        id=""
        name=""
        label="Şehir Ara"
        placeholder="Şehir Ara"
        color="success"
      type={"search"}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <SearchIcon></SearchIcon>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FormControl>
      <FormControl style={{ width: 300 }} sx={{ m: 1 ,mt:4}}  variant="standard">
        <TextField
        id=""
        name=""
        label="Geliş Tarihi Belirle"
        color="success"
      type={"date"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
      
          </InputAdornment>
        ),
      }}
        ></TextField>
      </FormControl>
      <FormControl style={{ width: 300 }} sx={{ m: 1 ,mt:4}}  variant="standard">
        <TextField
        id=""
        name=""
        label="Çıkış Tarih Belirle"
        color="success"
      type={"date"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
      
          </InputAdornment>
        ),
      }}
        ></TextField>
      </FormControl>
      <FormControl   color={"success"} style={{ width: 300 }} sx={{ m: 1,mt:4 }} variant="standard">
      <TextField
        id=""
        name=""
        label="Kişi Sayısı"
        placeholder="Kişi Sayısı"
        color="success"
      type={"number"}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <PeopleIcon></PeopleIcon>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FormControl>
      <FormControl
        style={{ width: 200 }}
        sx={{ m: 1, mt: 5 }}
        variant="standard"
      >
        <Button variant="contained" color="success">
          Otel Bul
        </Button>
      </FormControl>
    
  
    </div>
    
  );
}
