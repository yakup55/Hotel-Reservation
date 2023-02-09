import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LuggageIcon from "@mui/icons-material/Luggage";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
export default function Footer() {
  return (
    <div>
      <Box
        bgcolor="black"
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        <Grid container spacing={0}>
          <Grid container item spacing={0}>
            <Grid item xs={3}>
              <Card maxW="xl">
                <CardBody>
                  {/* <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                /> */}
                  <Stack mt="1" spacing="1">
                    <Heading color="white" size="md">
                      Sosyal Medya Hesaplarım
                    </Heading>

                    <Grid container rowSpacing={0}>
                      <Grid item xs={4}>
                        <Link href="https://github.com/yakup55">
                          <GitHubIcon  style={{width:40,height:40}}></GitHubIcon>
                        </Link>
                      </Grid>
                      <Grid item xs={4}>
                        <Link href="https://www.linkedin.com/in/yakup-y%C4%B1ld%C4%B1r%C4%B1m-7a12b0200/">
                          <LinkedInIcon style={{width:40,height:40}}></LinkedInIcon>
                        </Link>
                      </Grid>
                      <Grid  item xs={4}>
                        <Link href="https://www.instagram.com/yakup.0950/">
                          <InstagramIcon style={{width:40,height:40}}></InstagramIcon>
                        </Link>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card maxW="xl">
                <CardBody>
                  {/* <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                /> */}
                  <Stack mt="1" spacing="1">
                    <Heading color="white" size="md">
                      Living room Sofa
                    </Heading>
                    <Typography color="white" variant="h10">
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Typography>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card maxW="xl">
                <CardBody>
                  {/* <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                /> */}
                  <Stack mt="1" spacing="1">
                    <Heading color="white" size="md">
                      Living room Sofa
                    </Heading>
                    <Typography color="white" variant="h10">
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Typography>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Grid container rowSpacing={10}>
                <Grid item xs={6}>
                  <LuggageIcon
                    style={{
                      backgroundColor: "white",
                      width: 60,
                      height: 60,
                      marginTop: 20,
                      marginLeft: 100,
                    }}
                  ></LuggageIcon>
                </Grid>
                <Grid item xs={6}>
                  <Typography mt={2} mr={20} variant="h5" color="white">
                    Hotel Reservation
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        bgcolor="black"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        <Grid container spacing={0}>
          <Grid container item spacing={0}>
          <Grid item xs={6}>
              <Card maxW="xl">
                <CardBody>
                  {/* <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                /> */}
                  <Stack mt="1" spacing="1">
                    <Heading color="white" size="md">
                      Sosyal Medya Hesaplarım
                    </Heading>

                    <Grid container rowSpacing={0}>
                      <Grid item xs={4}>
                        <Link href="https://github.com/yakup55">
                          <GitHubIcon style={{width:40,height:40}}></GitHubIcon>
                        </Link>
                      </Grid>
                      <Grid item xs={4}>
                        <Link href="https://www.linkedin.com/in/yakup-y%C4%B1ld%C4%B1r%C4%B1m-7a12b0200/">
                          <LinkedInIcon style={{width:40,height:40}}></LinkedInIcon>
                        </Link>
                      </Grid>
                      <Grid  item xs={4}>
                        <Link href="https://www.instagram.com/yakup.0950/">
                          <InstagramIcon style={{width:40,height:40}}></InstagramIcon>
                        </Link>
                      </Grid>
                    </Grid>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card maxW="xl">
                <CardBody>
                  {/* <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                /> */}
                  <Stack mt="1" spacing="1">
                    <Heading color="white" size="md">
                      Living room Sofa
                    </Heading>
                    <Typography color="white" variant="h10">
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Typography>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card maxW="xl">
                <CardBody>
                  {/* <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                /> */}
                  <Stack mt="1" spacing="1">
                    <Heading color="white" size="md">
                      Living room Sofa
                    </Heading>
                    <Typography color="white" variant="h10">
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Typography>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Grid container rowSpacing={10}>
                <Grid item xs={6}>
                  <LuggageIcon
                    style={{
                      backgroundColor: "white",
                      width: 60,
                      height: 60,
                      marginTop: 20,
                      marginLeft: 100,
                    }}
                  ></LuggageIcon>
                </Grid>
                <Grid item xs={6}>
                  <Typography mt={2} mr={20} variant="h5" color="white">
                    Hotel Reservation
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
