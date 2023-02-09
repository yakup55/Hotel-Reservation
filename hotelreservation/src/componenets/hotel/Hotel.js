import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Button, Typography } from "@mui/material";


export default function Hotel() {
  return (
    <div>
      <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>Bu Fiyata Kaçmaz</Typography>
         <Box sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex' }}}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Grid item xs={3}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 350, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
      
        </Grid>
      </Grid>
    </Box>
       <Box sx={{ flexGrow: 1 , display: { xs: 'flex', md: 'none' }}}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <Grid item xs={6}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 400, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography textAlign="center" variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
      
          <Grid item xs={6}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 400, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography textAlign="center" variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
      
          <Grid item xs={6}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 400, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography textAlign="center" variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
      
          <Grid item xs={6}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 400, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography textAlign="center" variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
      
          <Grid item xs={6}>
            <Card maxW="xl">
              <CardBody>
                <Image
                  style={{ width: 400, height: 200 }}
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="1" spacing="1">
                  <Heading size="md">Living room Sofa</Heading>
                  <Typography textAlign="center" variant="h10">
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Typography>
                  <Typography color="red" variant="h5">
                    $450
                  </Typography>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Button style={{margin:"auto",display:"block"}} variant="contained" color="secondary">
                  Buy now
                </Button>
              </CardFooter>
            </Card>
          </Grid>
      
        </Grid>
      </Grid>
    </Box>  
    </div>
   
  );
}
