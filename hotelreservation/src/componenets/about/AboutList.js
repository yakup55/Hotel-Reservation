import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import About from "./About";
import { getAboutList } from "../../redux/actions/aboutActions";
export default function AboutList() {
  const { abouts } = useSelector((state) => state.about);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getAboutList());
  }, []);
  return (
    <Container style={{ marginTop: 50 }}>
      <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>
        Ucuz Oteli Bulmak İçin Neden Bu Siteyi Kullanmalıyım?
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            {abouts.data?.map((about) => (
              <Grid item xs={3}>
                <About key={about.aboutId} about={about}></About>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box sx={{flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
          {abouts.data?.map((about) => (
              <Grid item xs={6}>
                <About key={about.aboutId} about={about}></About>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
