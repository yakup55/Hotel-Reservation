import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Box, Button, Chip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";

import { useState } from "react";
import Share from "../share/Share";

export default function TravelWriting({ travelWriting }) {
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const [like, setLikes] = useState(0);
  const handleLikes = () => {
    setLikes(like + 1);
  };
  return (
    <>
      {travelWriting.travelStatus === true && (
        <Box sx={{ mt: 2, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Grid container spacing={1}>
            <Grid container item spacing={3}>
              <Grid item xs={3}>
                <Card maxW="md">
                  <Image
                    sx={{ height: 250 }}
                    objectFit="cover"
                    src={`${travelWriting?.travelImage}`}
                    alt="Chakra UI"
                    onClick={() =>
                      navigate(
                        `/travelwritings/${travelWriting.travelWritingId}`
                      )
                    }
                  ></Image>
                  <CardBody>
                    <Heading fontSize={17}>{travelWriting?.travelName}</Heading>
                  </CardBody>
                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                      "& > button": {
                        minW: "136px",
                      },
                    }}
                  >
                    <Button
                      onClick={handleLikes}
                      flex="1"
                      variant="ghost"
                      startIcon={<ThumbUpIcon></ThumbUpIcon>}
                    >
                      {like === 0 ? "Beğen" : `Beğen (${like})`}
                    </Button>
                    <Share></Share>
                  </CardFooter>
                  <Flex>
                    {/* <Avatar
                      sx={{ width: 60, height: 60 }}
                      src={`${user.data?.image}`}
                    /> */}
                    <Box ml="4">
                      {/* <Typography fontWeight="bold">
                        {user.data?.userName}
                      </Typography> */}
                      <Chip
                        sx={{ ml: 15 }}
                        label={travelWriting.travelDateTime.substring(0, 10)}
                        color="success"
                        variant="outlined"
                      />
                    </Box>
                  </Flex>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
      {travelWriting.travelStatus === true && (
        <Box
          sx={{
            mt: 2,
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <Grid container spacing={1}>
            <Grid container item spacing={3}>
              <Grid item xs={6}>
                <Card maxW="md">
                  <Image
                    sx={{ height: 300, width: 255 }}
                    objectFit="cover"
                    src={`${travelWriting?.travelImage}`}
                    alt="Chakra UI"
                    onClick={() =>
                      navigate(
                        `/travelwritings/${travelWriting.travelWritingId}`
                      )
                    }
                  />
                  <CardBody>
                    <Heading fontSize={17}>{travelWriting?.travelName}</Heading>
                  </CardBody>
                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                      "& > button": {
                        minW: "136px",
                      },
                    }}
                  >
                    <Button
                      flex="1"
                      variant="ghost"
                      startIcon={<ThumbUpIcon></ThumbUpIcon>}
                    >
                      Like
                    </Button>
                    <Share></Share>
                  </CardFooter>
                  <Flex>
                    {/* <Avatar
                      sx={{ width: 60, height: 60 }}
                      src={`${user.data?.image}`}
                    /> */}
                    <Box ml="4">
                      {/* <Typography fontWeight="bold">
                        {user.data?.userName}
                      </Typography> */}
                      <Chip
                        label={travelWriting.travelDateTime?.substring(0, 10)}
                        color="success"
                        variant="outlined"
                      />
                    </Box>
                  </Flex>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}
