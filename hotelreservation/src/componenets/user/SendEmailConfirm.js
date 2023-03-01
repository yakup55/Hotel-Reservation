import { Heading } from "@chakra-ui/react";
import { Button, Container } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { openSnacbar } from "../../redux/actions/appActions";
import { confirmEmailSend } from "../../redux/actions/userActions";

export default function SendEmailConfirm() {
  const { email } = useParams();
  const dispacth = useDispatch();
  const { handleSubmit } = useFormik({
    initialValues: {
      email: email,
    },
    onSubmit: (values) => {
      dispacth(confirmEmailSend(values));
      dispacth(
        openSnacbar({
          message: "Email Adresiniz Doğrulanmıştır Giriş Yapabilirsiniz",
          severity: "success",
        })
      );
    },
  });
  return (
    <Container>
      <Heading>
        Email Adresiniz Doğrulamak İçin Lütfen Butona Tıklayınız
      </Heading>
      <form onSubmit={handleSubmit}>
        <Button type="submit" variant="contained">
          Tıklayınız
        </Button>
      </form>
    </Container>
  );
}
