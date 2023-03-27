import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Chip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function TravelWriting({ travelWriting }) {
  const navigate = useNavigate();
  return (
    <>
      {travelWriting.travelStatus === true && (
        <SimpleGrid minChildWidth="120px">
          <Box height="380">
            <Card maxW="md">
              <Image
                sx={{margin:"auto",display:"block", height: 200 ,width:380}}
                objectFit="cover"
                src={`${travelWriting?.travelImage}`}
                alt="Chakra UI"
                onClick={() =>
                  navigate(`/travelwritings/${travelWriting.travelWritingId}`)
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
              ></CardFooter>
              <Flex>
                {/* <Avatar
                      sx={{ width: 60, height: 60 }}
                      src={`${user.data?.image}`}
                    /> */}
                <Box sx={{ margin: "auto", display: "block" }}>
                  {/* <Typography fontWeight="bold">
                        {user.data?.userName}
                      </Typography> */}
                  <Chip
                    sx={{ mt:1 }}
                    label={travelWriting.travelDateTime.substring(0, 10)}
                    color="success"
                    variant="outlined"
                  />
                </Box>
              </Flex>
            </Card>
          </Box>
        </SimpleGrid>
      )}
    </>
  );
}
