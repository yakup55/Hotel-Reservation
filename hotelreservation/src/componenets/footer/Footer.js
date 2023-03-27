import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardBody,
  Divider,
  Heading,
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Typography } from "@mui/material";
export default function Footer() {
  return (
    <SimpleGrid bg={"black"} minChildWidth="120px" spacing="40px">
      <Box height="300px">
        <Card mt={60} maxW="xl">
          <CardBody>
            <Stack mt="1" spacing="1">
              <Heading color="white" size="md">
                Sosyal Medya Hesaplarım
              </Heading>

              <Grid container rowSpacing={0}>
                <Grid item xs={3}>
                  <Link href="https://github.com/yakup55">
                    <GitHubIcon style={{ width: 40, height: 40 }}></GitHubIcon>
                  </Link>
                </Grid>
                <Grid item xs={3}>
                  <Link href="https://www.linkedin.com/in/yakup-y%C4%B1ld%C4%B1r%C4%B1m-7a12b0200/">
                    <LinkedInIcon
                      style={{ width: 40, height: 40 }}
                    ></LinkedInIcon>
                  </Link>
                </Grid>
                <Grid item xs={3}>
                  <Link href="https://www.instagram.com/yakup.0950/">
                    <InstagramIcon
                      style={{ width: 40, height: 40 }}
                    ></InstagramIcon>
                  </Link>
                </Grid>
                <Grid item xs={3}>
                  <Link href="https://www.youtube.com/channel/UCk1C6R0-d1npbbjec1B8wZw">
                    <YouTubeIcon
                      style={{ width: 40, height: 40 }}
                    ></YouTubeIcon>
                  </Link>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Box>
      <Box bg="tomato" height="80px">
        <Card mt={60}>
          <CardBody>
            <Stack mt="1" spacing="3">
              <Heading color="white" size="md">
                Önemli Bilgi
              </Heading>
              <Typography color="white" variant="h10">
                Bu sitedeki veriler{" "}
                <Link
                  sx={{ textDecoration: "none" }}
                  color="white"
                  href="https://www.enuygun.com/otel/"
                >
                  ENUYGUN
                </Link>{" "}
                dan alınmıştır
              </Typography>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Box>
    </SimpleGrid>
  );
}
