import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import About from "./About";
import { getAboutList } from "../../redux/actions/aboutActions";
import { Box, SimpleGrid } from "@chakra-ui/react";
export default function AboutList() {
  const { abouts } = useSelector((state) => state.about);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispacth(getAboutList());
  }, [dispacth]);
  return (
    <  >
      <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>
        Ucuz Oteli Bulmak İçin Neden Bu Siteyi Kullanmalıyım?
      </Typography>
      <SimpleGrid minChildWidth="150px">
        {abouts.data?.map((about) => (
          <Box height="350px">
            <About key={about.aboutId} about={about}></About>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
