import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Category({ category }) {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  return (
    <Container style={{ marginLeft: 20 }}>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Card sx={{ width: 250, height: 300 }}>
                <CardActionArea>
                  <CardMedia
                    onClick={() =>
                      navigate(`/hotelcategorylist/${category.categoryId}`)
                    }
                    component="img"
                    height="200"
                    image={`${category?.categoryImage}`}
                    alt={category?.categoryName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {category?.categoryName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ml: 10, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ width: 250, height: 300 }}>
                <CardActionArea>
                  <CardMedia
                    onClick={() =>
                      navigate(`/hotelcategorylist/${category.categoryId}`)
                    }
                    component="img"
                    height="200"
                    image={`${category?.categoryImage}`}
                    alt={category?.categoryName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {category?.categoryName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
