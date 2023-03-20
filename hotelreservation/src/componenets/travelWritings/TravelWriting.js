import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Avatar, Badge, Box, Button, Chip, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getByUser } from "../../redux/actions/userActions";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
export default function TravelWriting({ travelWriting }) {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    // dispacth(getByUser(travelWriting.userId));
  }, [dispacth, travelWriting.userId]);
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
                    <Button flex='1' variant='ghost' startIcon={<ThumbUpIcon></ThumbUpIcon>}>
      Like
    </Button>
    <Button flex='1' variant='ghost' startIcon={<ChatIcon />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' startIcon={<ShareIcon />}>
      Share
    </Button>
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
                      sx={{ml:15}}
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
            ml: 5,
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
                    sx={{ height: 250, width: 200 }}
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
                    {/* <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      Share
    </Button> */}
                  </CardFooter>
                  <Flex>
                    <Avatar
                      sx={{ width: 60, height: 60 }}
                      src={`${user.data?.image}`}
                    />
                    <Box ml="4">
                      <Typography fontWeight="bold">
                        {user.data?.userName}
                      </Typography>
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
