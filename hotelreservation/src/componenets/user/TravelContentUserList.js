import { Heading, Image } from "@chakra-ui/react";
import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteTravelContent,
  travelWritingsContentUserList,
} from "../../redux/actions/travelContentActions";
import { getByUserMail } from "../../redux/actions/userActions";
import BuildIcon from "@mui/icons-material/Build";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { openSnacbar } from "../../redux/actions/appActions";
import Footer from "../footer/Footer";
export default function TravelContentUserList() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { email, id } = useParams();
  const { user } = useSelector((state) => state.user);
  const { travelContents } = useSelector((state) => state.travelContent);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(10);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = travelContents.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(travelContents.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(getByUserMail(email));
    dispacth(travelWritingsContentUserList(user.data?.id, id));
  }, [dispacth, email, user.data?.id, id]);

  const handleTrawelContentDeleted = (id) => {
    dispacth(deleteTravelContent(id));
    dispacth(
      openSnacbar({
        message: "İçerik Silindi",
        severity: "success",
      })
    );
  };
  return (
    <>
      <Heading>Seyahat İçerik Yazılarım</Heading>
      <Container maxWidth="xl">
        {travelContents.data?.length === 0 && (
          <Typography>Seyahat Yazınız Bulunmamaktadır</Typography>
        )}
        {travelContents.data?.length !== 0 && (
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>
                    Seyahat İçerik Adı
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Seyahat İçerik Mesajı
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Seyahat İçerik Resmi
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>Seyahat Adı</TableCell>

                  <TableCell sx={{ color: "white" }}>Detay</TableCell>
                  <TableCell sx={{ color: "white" }}>Güncelle</TableCell>
                  <TableCell sx={{ color: "white" }}>Sil</TableCell>
                </TableRow>

                {currentPost?.map((travel) => (
                  <TableRow>
                    <TableCell>{travel.contentName}</TableCell>
                    <TableCell>{travel.contentDescription}</TableCell>
                    <TableCell>
                      <Image
                        sx={{ width: 200, height: 100 }}
                        src={`${travel.contentImage}`}
                      ></Image>
                    </TableCell>
                    <TableCell>{travel.travelWritings?.travelName}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(`/travelwritings/${travel.travelWritingId}`)
                        }
                        variant="contained"
                        color="secondary"
                      >
                        <MenuBookIcon></MenuBookIcon>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/usertravelcontentupdate/${email}/${travel.travelContentId}`
                          )
                        }
                        variant="contained"
                        color="success"
                      >
                        <BuildIcon></BuildIcon>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() =>
                          handleTrawelContentDeleted(travel.travelContentId)
                        }
                        variant="contained"
                        color="error"
                      >
                        <DeleteOutlineIcon></DeleteOutlineIcon>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </TableBody>
          </TableContainer>
        )}
        <Pagination
          count={PageCount}
          onChange={handleChange}
          color="secondary"
        />
      </Container>
      <div sx={{ marginTop: 30 }}>
        <Footer></Footer>
      </div>
    </>
  );
}
