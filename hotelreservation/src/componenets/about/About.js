import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function About({ about }) {
  return (
    <SimpleGrid>
      <Box height="200px">
        <Card
          sx={{ width: 170, height: 150, margin: "auto", display: "block" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={`${about?.aboutImage}`}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {about?.aboutName}
          </Typography>
          <Typography
            fontStyle={"oblique"}
            variant="body2"
            color="text.secondary"
          >
            {about?.aboutDescription}
          </Typography>
        </CardContent>
      </Box>
    </SimpleGrid>
  );
}
