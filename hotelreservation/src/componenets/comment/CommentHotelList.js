import {
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentHotelList } from "../../redux/actions/commentActions";

export default function CommentHotelList() {
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const dispacth = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  useEffect(() => {
    dispacth(commentHotelList(id));
  }, []);
  return (
    <div>
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
          Tüm Yorumlar
        </Typography>
        {comments.data?.map((comment) => (
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                style={{ backgroundColor: "black" }}
                alt={user.data?.userName}
                src="/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>

            <ListItemText
              primary={comment.commentSubject}
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
                  {`-${comment.commentMessage}`}
                  {`-${comment.commentDate}`}
                </React.Fragment>
              }
            />
            <Stack direction="row" spacing={1}>
              <Chip
                sx={{ fontSize: 13, fontStyle: "italic" }}
                label={`${comment.degre?.degreName}-${comment.degre?.degreValue}`}
                color="secondary"
              />
            </Stack>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
