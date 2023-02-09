import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

export default function HotelList() {
  return (
    <Grid
      h="1000"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={10} colSpan={0}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Konuk Değerlendirmesi
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Checkbox />}
              label="Mükemmel(9 ve üzeri)"
            />
            <FormControlLabel
              value="male"
              control={<Checkbox />}
              label="Çok iyi (8 ve üzeri)"
            />
            <FormControlLabel
              value="other"
              control={<Checkbox />}
              label="İyi (7 ve üzeri)"
            />
            <FormControlLabel
              value="other"
              control={<Checkbox />}
              label="Keyifli (6 ve üzeri)"
            />
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Tatil Temaları
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Checkbox />}
              label="Bunglov Oteller"
            />
            <FormControlLabel
              value="male"
              control={<Checkbox />}
              label="Termal Oteller"
            />
            <FormControlLabel
              value="other"
              control={<Checkbox />}
              label="Tatil Köyleri"
            />
          </RadioGroup>
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Konuk Değerlendirmesi
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Checkbox />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Checkbox />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              control={<Checkbox />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <Card
          style={{ marginTop: 50 }}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            width={400}
            height={300}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                color="success"
              >
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </GridItem>
      <GridItem colSpan={4}>
        <Card
          style={{ marginTop: 50 }}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            width={400}
            height={300}
            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                color="success"
              >
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </GridItem>
    </Grid>
  );
}
