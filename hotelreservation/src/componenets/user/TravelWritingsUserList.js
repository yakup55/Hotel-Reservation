import {
  Button,
  Container,
  Menu,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteTravelWritings,
  travelWritingsUserList,
} from "../../redux/actions/travelWritingsActions";
import { getByUserMail } from "../../redux/actions/userActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Heading, Image } from "@chakra-ui/react";
import { openSnacbar } from "../../redux/actions/appActions";
import BuildIcon from "@mui/icons-material/Build";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
export default function TravelWritingsUserList() {
  const navigate = useNavigate();
  const { email } = useParams();
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const { travelWritings } = useSelector((state) => state.travelWriting);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(5);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = travelWritings.data?.slice(firstPost, lastPost);
  const PageCount = Math.ceil(travelWritings.data?.length / postPerPage);
  const handleChange = (event, value) => {
    setNumber(value);
  };
  useEffect(() => {
    dispacth(travelWritingsUserList(user.data?.id));
    dispacth(getByUserMail(email));
  }, [dispacth, email, user.data?.id]);
  const handleTrawelWritingDeleted = (id) => {
    dispacth(deleteTravelWritings(id));
    dispacth(
      openSnacbar({
        message: "Seyahat Yazınız Silinmiştir",
        severity: "success",
      })
    );
  };
  return (
    <>
      <Heading>Seyahat Yazılarım</Heading>
      <Container maxWidth="xl">
        {travelWritings.data?.length === 0 && (
          <Typography>Seyahat Yazınız Bulunmamaktadır</Typography>
        )}
        {travelWritings.data?.length !== 0 && (
          <TableContainer>
            <TableBody>
              <Table>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell sx={{ color: "white" }}>Seyahat Adı</TableCell>
                  <TableCell sx={{ color: "white" }}>Seyahat Mesajı</TableCell>
                  <TableCell sx={{ color: "white" }}>Seyahat Resmi</TableCell>
                  <TableCell sx={{ color: "white" }}>Ekleme Tarihi</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Onaylanma Durumu
                  </TableCell>
                  <TableCell sx={{ color: "white" }}>Detay</TableCell>
                  <TableCell sx={{ color: "white" }}>Güncelle</TableCell>
                  <TableCell sx={{ color: "white" }}>Sil</TableCell>
                </TableRow>

                {currentPost?.map((travel) => (
                  <TableRow>
                    <TableCell>{travel.travelName}</TableCell>
                    <TableCell>{travel.travelMessage}</TableCell>
                    <TableCell>
                      <Image
                        style={{ width: 200, height: 100 }}
                        src={`${travel.travelImage}`}
                      ></Image>
                    </TableCell>
                    <TableCell>
                      {travel.travelDateTime?.substring(0, 10)}
                    </TableCell>
                    {travel.travelStatus === true && (
                      <TableCell>
                        <CheckCircleIcon></CheckCircleIcon>
                      </TableCell>
                    )}
                    {travel.travelStatus === false && (
                      <TableCell>
                        <CancelIcon></CancelIcon>
                      </TableCell>
                    )}
                    <TableCell>
                      <Button
                        onClick={() =>
                          navigate(
                            `/usercontentslist/${email}/${travel.travelWritingId}`
                          )
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
                            `/usertravelwritingupdate/${email}/${travel.travelWritingId}`
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
                          handleTrawelWritingDeleted(travel.travelWritingId)
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
    </>
  );
}
