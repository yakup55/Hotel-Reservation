import {
  AspectRatio,
  Grid,
  GridItem,
  Heading,
  Progress,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MobileStepper,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hotelOneDetail } from "../../redux/actions/hotelActions";
import { commentHotelList } from "../../redux/actions/commentActions";
import Avatar from "@mui/material/Avatar";
import HotelService from "../../redux/services/hotelService";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "styled-components";

export default function HotelDetail() {
  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const { id } = useParams();
  const { hotel } = useSelector((state) => state.hotel);
  const { comments } = useSelector((state) => state.comment);
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(commentHotelList(id));
    dispacth(hotelOneDetail(id));
  }, []);
  return (
    <Box>
      <Grid
        h="1000px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Heading>{hotel.data?.hotelName}</Heading>
          <Typography variant="h6">{hotel.data?.hotelLocation}</Typography>
          <img style={{marginLeft:20}} src={`${hotel.data?.hotelImage}`}></img>
          <Stack direction="row" spacing={1}>
            <Chip
              sx={{ml:12, fontSize: 15, fontStyle: "italic" }}
              label={`${hotel.data?.degre.degreName}-${hotel.data?.degre.degreValue}`}
              color="primary"
            />
            <Chip label={`${comments.data?.length} Yorum`} color="success" />
          </Stack>

          <List
            sx={{
              ml: 2,
              mt: 1,
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <Typography fontStyle={"italic"}>Popüler Yorumlar</Typography>
            {comments.data?.map((comment) => (
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Yakup" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>

                <ListItemText
                  primary={comment.commentSubject}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Yakup
                      </Typography>
                      {`-${comment.commentMessage}`}
                    </React.Fragment>
                  }
                />
                <Stack direction="row" spacing={1}>
                  <Chip label={`${comment.commentRating}`} color="secondary" />
                </Stack>
              </ListItem>
            ))}
          </List>
          <AspectRatio sx={{ ml: 2, mt: 5 }} ratio={16 / 9}>
            <iframe
              s
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            />
          </AspectRatio>
          <Typography>Categorileri Gelicek</Typography>
        </GridItem>

        <GridItem
          sx={{ width: 1100, ml: 10, mt: 5 }}
          colSpan={4}
          bg="papayawhip"
        >
          <Box sx={{ width: 1100, flexGrow: 1, m: "auto" }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              <Typography>{images[activeStep].label}</Typography>
            </Paper>

            <img
              style={{ width: 1100, height: 400 }}
              src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
            ></img>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme?.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme?.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </GridItem>
        <GridItem colSpan={4} bg="tomato">
          ODALAR GELİCEK
        </GridItem>
      </Grid>
    </Box>
  );
}
