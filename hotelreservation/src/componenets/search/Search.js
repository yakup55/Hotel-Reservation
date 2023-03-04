import { SimpleGrid } from "@chakra-ui/react";
import { Box, Button, TextField } from "@mui/material";
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
    <>
      <SimpleGrid mt={10} minChildWidth="120px" spacing="40px">
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          ml={20}
          width="700px"
        >
          <TextField
            sx={{ width: 700 }}
            id="name"
            name="name"
            label="Aranıcak Kelimeyi Giriniz"
            onChange={(e) => search(e.target.value)}
            placeholder="Aramak istediğiniz otel adı veya kategori adı veya şehir adı giriniz"
          ></TextField>
        </Box>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          ml={10}
          bg="tomato"
          width="550px"
        >
          <TextField
            sx={{ width: 600 }}
            id="name"
            name="name"
            label="Aranıcak Kelimeyi Giriniz"
            onChange={(e) => search(e.target.value)}
            placeholder="Aramak istediğiniz otel adı veya kategori adı veya şehir adı giriniz"
          ></TextField>
        </Box>
      </SimpleGrid>
    </>
  );
}
