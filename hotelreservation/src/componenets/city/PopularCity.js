import { Box, Container, Grid, Typography } from "@mui/material";
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
  }, []);
  return (
    <div style={{marginLeft:50,marginTop:30}}>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {cities.data?.map((city) => (
            <Grid item xs={3}>
              <City key={city.cityId} city={city}></City>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <Grid container spacing={1}>
        <Grid container item spacing={1}>
          {cities.data?.map((city) => (
            <Grid item xs={6}>
              <City key={city.cityId} city={city}></City>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
    </div>
    
  );
}
