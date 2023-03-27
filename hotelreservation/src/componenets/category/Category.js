import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Category({ category }) {
  const navigate = useNavigate();

  return (
    <SimpleGrid>
      <Box height="200px">
        <Card sx={{ width: 150, height: 150,margin:"auto",display:"block" }}>
          <CardActionArea>
            <CardMedia
              onClick={() =>
                navigate(`/hotelcategorylist/${category.categoryId}`)
              }
              component="img"
              image={`${category?.categoryImage}`}
              alt={category?.categoryName}
            />
          </CardActionArea>
        </Card>
        <Heading >{category?.categoryName}</Heading>
      </Box>
    </SimpleGrid>
  );
}
