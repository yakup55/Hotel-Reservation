import {
  Box,
  Collapse,
  GridItem,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTravelWritings } from "../../redux/actions/travelWritingsActions";
import { getByUserMail } from "../../redux/actions/userActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { validationSchema } from "../../admin/travelWritings/validationSchema";
import UserAddTravelContent from "./UserAddTravelContent";
import Footer from "../footer/Footer";
export default function UserAddTravelWritings() {
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { email } = useParams();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        userId: user.data?.id,
        travelName: "",
        travelMessage: "",
        travelImage: "",
      },
      onSubmit: (values) => {
        dispacth(addTravelWritings(values));
        dispacth(
          openSnacbar({
            message: "Eklendi",
            severity: "success",
          })
        );
        // navigate(`/addtravelwritings/${email}`);
      },
      validationSchema,
    }
  );
  useEffect(() => {
    dispacth(getByUserMail(email));
  }, [dispacth, email]);
  console.log(user.data?.id);
  return (
    <>
      <Heading>Seyahat Yazılarınız Onaylandıktan Sonra Yayınlancaktır</Heading>
      <GridItem colSpan={4}>
        <Container maxWidth="sm" sx={{ mt: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                multiline
                id="travelName"
                name="travelName"
                label="Seyahat Adı "
                placeholder="Seyahat Adı "
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.travelName && touched.travelName}
                helperText={
                  errors.travelName && touched.travelName
                    ? errors.travelName
                    : ""
                }
              ></TextField>
              <TextField
                multiline
                id="travelMessage"
                name="travelMessage"
                label=" Seyahat Mesajı"
                placeholder="Seyahat Mesajı"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.travelMessage && touched.travelMessage}
                helperText={
                  errors.travelMessage && touched.travelMessage
                    ? errors.travelMessage
                    : ""
                }
              ></TextField>
              <TextField
                multiline
                id="travelImage"
                name="travelImage"
                label="Seyahat Resmi"
                placeholder="Seyahat Resmi"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.travelImage && touched.travelImage}
                helperText={
                  errors.travelImage && touched.travelImage
                    ? errors.travelImage
                    : ""
                }
              ></TextField>
              <Button type="submit" variant="contained">
                Seyahat Ekle
              </Button>
              <Button type="reset" color="error" variant="contained">
                Temizle
              </Button>
            </Stack>
          </form>
          <Button
            sx={{ mt: 5, mr: 40 }}
            variant="contained"
            color="secondary"
            onClick={onToggle}
          >
            İçerik Ekle
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              p="40px"
              color="white"
              mt="4"
              bg="teal.500"
              rounded="md"
              shadow="md"
            >
              <UserAddTravelContent></UserAddTravelContent>
            </Box>
          </Collapse>
        </Container>
      </GridItem>
      <div style={{ marginTop: 100 }}>
        <Footer></Footer>
      </div>
    </>
  );
}
