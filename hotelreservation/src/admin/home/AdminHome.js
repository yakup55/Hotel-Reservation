import { Grid, GridItem } from "@chakra-ui/react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import KingBedIcon from "@mui/icons-material/KingBed";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useNavigate } from "react-router-dom";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
export default function AdminHome() {
  const navigate = useNavigate();
  return (
    <Grid
      h="900px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={0}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <div style={{ margin: "auto", display: "block", marginTop: 10 }}>
          <img
            onClick={() => navigate("/adminhome")}
            style={{ height: 250, width: 250 }}
            src="https://cdn3.enuygun.com/media/lib/1x250/uploads/image/lords-palace-spa-casino-kibris-genel-38526961.jpg"
          ></img>
        </div>

        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem onClick={() => navigate("/adminrolelist")}>
            <ListItemAvatar>
              <Avatar>
                <AdminPanelSettingsIcon></AdminPanelSettingsIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Role" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminuserlist")}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon></PersonIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="User" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminhotellist")}>
            <ListItemAvatar>
              <Avatar>
                <KingBedIcon></KingBedIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Hotel" />
          </ListItem>

          <ListItem onClick={() => navigate("/adminhoteldetaillist")}>
            <ListItemAvatar>
              <Avatar>
                <KingBedIcon></KingBedIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Hotel Detail" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminroomlist")}>
            <ListItemAvatar>
              <Avatar>
                <MeetingRoomIcon></MeetingRoomIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Room" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminroomdetaillist")}>
            <ListItemAvatar>
              <Avatar>
                <MeetingRoomIcon></MeetingRoomIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Room Detail" />
          </ListItem>
          <ListItem onClick={() => navigate("/admincategorylist")}>
            <ListItemAvatar>
              <Avatar>
                <CategoryIcon></CategoryIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Category" />
          </ListItem>

          <ListItem onClick={() => navigate("/adminaboutlist")}>
            <ListItemAvatar>
              <Avatar>
                <InfoIcon></InfoIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminquentionslist")}>
            <ListItemAvatar>
              <Avatar>
                <HelpOutlineIcon></HelpOutlineIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Quentions" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminreservationlist")}>
            <ListItemAvatar>
              <Avatar>
                <EventSeatIcon></EventSeatIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Reservation" />
          </ListItem>
          <ListItem onClick={() => navigate("/admincommentlist")}>
            <ListItemAvatar>
              <Avatar>
                <ModeCommentIcon></ModeCommentIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Comment" />
          </ListItem>
          <ListItem onClick={() => navigate("/admindegrelist")}>
            <ListItemAvatar>
              <Avatar>
                <WorkspacePremiumIcon></WorkspacePremiumIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Degre" />
          </ListItem>
          <ListItem>
            <ListItemAvatar onClick={() => navigate("/admincitylist")}>
              <Avatar>
                <LocationCityIcon></LocationCityIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="City" />
          </ListItem>
          <ListItem onClick={() => navigate("/admincontactlist")}>
            <ListItemAvatar>
              <Avatar>
                <ContactSupportIcon></ContactSupportIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem onClick={() => navigate("/adminfacilitylist")}>
            <ListItemAvatar>
              <Avatar>
                <ApartmentIcon></ApartmentIcon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Facility" />
          </ListItem>
          
        </List>
      </GridItem>
      {/* <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={4} bg='tomato' /> */}
    </Grid>
  );
}
