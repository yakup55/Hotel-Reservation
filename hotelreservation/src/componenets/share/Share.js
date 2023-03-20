import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
export default function Share() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleClickOpen}
        flex="1"
        variant="ghost"
        startIcon={<ShareIcon />}
      >
        Paylaş
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Nerede Paylaşmak İstersin?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <SimpleGrid columns={[2, null, 3]} spacing="20px">
              <Box height="90px">
                <Link
                  href="https://twitter.com/intent/tweet?text=Your+tweet+text&amp;url=https%3A%2F%2Fexample.com"
                  data-size="large"
                >
                  <TwitterIcon
                    sx={{
                      width: 50,
                      height: 50,
                      margin: "auto",
                      display: "block",
                    }}
                  ></TwitterIcon>
                </Link>
                <Heading>Twitter</Heading>
              </Box>
              <Box height="90px">
                <div
                  class="fb-share-button"
                  data-href="https://example.com"
                  data-layout="button"
                  data-size="large"
                >
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com%2F&amp;src=sdkpreparse"
                    class="fb-xfbml-parse-ignore"
                  >
                    <FacebookIcon
                      sx={{
                        width: 50,
                        height: 50,
                        margin: "auto",
                        display: "block",
                      }}
                    ></FacebookIcon>
                  </Link>
                  <Heading>Facebook</Heading>
                </div>
              </Box>
              <Box height="80px">
                <Link
                  href="https://t.me/share/url?url=https://example.com&text=Your+share+text"
                  target="_blank"
                >
                  <TelegramIcon
                    sx={{
                      width: 50,
                      height: 50,
                      margin: "auto",
                      display: "block",
                    }}
                  ></TelegramIcon>
                </Link>
                <Heading>Telegram</Heading>
              </Box>
              <Box height="80px">
                <Link
                  href="https://t.me/share/url?url=https://example.com&text=Your+share+text"
                  target="_blank"
                >
                  <WhatsAppIcon
                    sx={{
                      width: 50,
                      height: 50,
                      margin: "auto",
                      display: "block",
                    }}
                  ></WhatsAppIcon>
                </Link>
                <Heading>WhatsApp</Heading>
              </Box>
              <Box height="80px">
                <Link
                  href="https://t.me/share/url?url=https://example.com&text=Your+share+text"
                  target="_blank"
                >
                  <LinkedInIcon
                    sx={{
                      width: 50,
                      height: 50,
                      margin: "auto",
                      display: "block",
                    }}
                  ></LinkedInIcon>
                </Link>
                <Heading>LinkedIn</Heading>
              </Box>
              <Box height="80px">
                <Link
                  href="https://t.me/share/url?url=https://example.com&text=Your+share+text"
                  target="_blank"
                >
                  <InstagramIcon
                    sx={{
                      width: 50,
                      height: 50,
                      margin: "auto",
                      display: "block",
                    }}
                  ></InstagramIcon>
                </Link>
                <Heading>Instagram</Heading>
              </Box>
            </SimpleGrid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
