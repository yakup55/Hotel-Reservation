import { Box, SimpleGrid } from "@chakra-ui/react";
import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchHotelList } from "../../redux/actions/hotelActions";
export default function Search() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const search = (name) => {
    dispacth(searchHotelList(name));
  };
  return (
    <Container maxWidth="lg">
      <SimpleGrid mt={10} minChildWidth="120px" spacing="40px">
        <Box height="70px">
          <TextField
          fullWidth
            id="name"
            name="name"
            label="Aranıcak Kelimeyi Giriniz"
            onChange={(e) => search(e.target.value)}
            placeholder="Aramak istediğiniz otel adı veya kategori adı veya şehir adı giriniz"
          ></TextField>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
