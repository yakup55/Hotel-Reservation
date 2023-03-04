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
  const { user } = useSelector((state) => state.user);
  const dispacth = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  const { room } = useSelector((state) => state.room);
  useEffect(() => {
    dispacth(popularCommentHotel(room.data?.hotel.hotelId));
  }, []);
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
      <Typography variant="h6" fontStyle={"italic"}>
        Popüler Yorumlar
      </Typography>
      {comments.data?.map((detail) => (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              style={{ backgroundColor: "black" }}
              alt={user.data?.userName}
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
                  {user.data?.userName}
                </Typography>
                {`-${detail.commentMessage}`}
                {`-${detail.commentDate}`}
              </React.Fragment>
            }
          />
          <Stack direction="row" spacing={1}>
            <Chip
              sx={{ fontSize: 13, fontStyle: "italic" }}
              label={`${detail.degre?.degreName}-${detail.degre?.degreValue}`}
              color="secondary"
            />
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
