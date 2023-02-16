import {
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCommentList,
  popularCommentHotel,
} from "../../redux/actions/commentActions";

export default function PopularCommentList() {
  const dispacth = useDispatch();
  const { id } = useParams();
  const {  comments } = useSelector((state) => state.comment);
  useEffect(() => {
    dispacth(popularCommentHotel(id));
  }, []);
  console.log(comments);
  return (
    <List
      sx={{
        ml: 2,
        mt: 1,
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" fontStyle={"italic"}>Popüler Yorumlar</Typography>
      {comments.data?.map((detail) => (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              style={{ backgroundColor: "black" }}
              alt="Yakup"
              src="/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>

          <ListItemText
            primary={detail.commentSubject}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Yakup
                </Typography>
                {`-${detail.commentMessage}`}
                {`-${detail.commentDate}`}
              </React.Fragment>
            }
          />
          <Stack direction="row" spacing={1}>
            <Chip label={`${detail.commentRating}`} color="secondary" />
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
