import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function About({about}) {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  return (
    <Container style={{ marginTop: 50 }}>
      <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>
        Ucuz Oteli Bulmak İçin Neden Enuygun.com’u Kullanmalıyım?
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={3}>
              <Card sx={{ width: 280, height: 280 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${about?.aboutImage}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                  {about?.aboutName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
         {about?.aboutDescription}
          </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ width: 200, height: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ width: 280, height: 280 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ width: 200, height: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ml:20, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ width: 200, height: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ width: 200, height: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ width: 200, height: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ width: 200, height: 200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/bungalov.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
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
