import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Container, Grid } from "@mui/material";

export default function Category() {
  return (
    <Container style={{ marginTop: 50 }}>
         <Typography mt={5} mb={3} variant="h5" fontStyle={"italic"}>Tatil Temaları</Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
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
                      Bungalov 
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
                    image="https://cdn.enuygun.com/otel/v-d645c/static/images/theme-icons/pansiyon.svg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Pansiyonlar
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
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
