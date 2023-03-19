import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
export default function ErrorPage() {
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                mb: 3,
                textAlign: "center",
              }}
            >
              <img
                alt="Under development"
                src="https://material-kit-react.devias.io/assets/errors/error-404.png"
                style={{
                  display: "inline-block",
                  maxWidth: "100%",
                  width: 400,
                }}
              />
            </Box>
            <Typography align="center" sx={{ mb: 3 }} variant="h3">
              404: Aradığın Sayfa Bulunamadı
            </Typography>
            <Button href="/" sx={{ mt: 3 }} variant="contained">
              Anasayfaya Dön
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
