import { Grid, GridItem } from '@chakra-ui/react'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import KingBedIcon from '@mui/icons-material/KingBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { useNavigate } from 'react-router-dom';


export default function AdminHome() {
  const navigate=useNavigate()
  return(
    <Grid
    h='900px'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={0}
  >
    <GridItem rowSpan={2} colSpan={1}>
      <div style={{margin:"auto",display:"block",marginTop:10}}>
    <img style={{height:250,width:250}} src='https://cdn3.enuygun.com/media/lib/1x250/uploads/image/lords-palace-spa-casino-kibris-genel-38526961.jpg'></img>
      </div>

    <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem onClick={()=>navigate("/adminhotellist")}>
        <ListItemAvatar>
          <Avatar>
        <KingBedIcon></KingBedIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hotel"  />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <KingBedIcon></KingBedIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hotel Detail"/>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <MeetingRoomIcon></MeetingRoomIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Room" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <MeetingRoomIcon></MeetingRoomIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Room Detail" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <CategoryIcon></CategoryIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Category" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <InfoIcon></InfoIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <HelpOutlineIcon></HelpOutlineIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Quentions" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <EventSeatIcon></EventSeatIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Reservation" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
  <ModeCommentIcon></ModeCommentIcon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Comment" />
      </ListItem>
     
    </List>
    </GridItem>
    {/* <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={2} bg='papayawhip' />
    <GridItem colSpan={4} bg='tomato' /> */}
  </Grid>
  )
}
