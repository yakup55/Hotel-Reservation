import { Box, SimpleGrid } from "@chakra-ui/react";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularCity } from "../../redux/actions/cityActions";
import City from "./City";

export default function PopularCity() {
  const { cities } = useSelector((state) => state.city);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(popularCity());
  }, [dispacth]);
  return (
    <>
      <Typography variant="h5" fontStyle={"italic"}>
        Çok Tercih Edilen Yerler
      </Typography>
      <SimpleGrid mt={20} minChildWidth="410px" >
        {cities.data?.map((city) => (
          <Box height="400px">
            <City key={city.cityId} city={city}></City>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
