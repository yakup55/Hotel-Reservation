import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { Box } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { hotelCategoryList } from '../../redux/actions/hotelActions'
import Hotel from '../hotel/Hotel'
import HotelNavList from '../hotel/HotelNavList'

export default function CategoryHotelList() {
    const dispacth=useDispatch();
    const {id}=useParams()
    const {hotels}=useSelector((state)=>state.hotel);
    useEffect(()=>{
        dispacth(hotelCategoryList(id))
    },[])
  return (
    <Grid
    h="1000"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={0}
  >
    <GridItem rowSpan={10} colSpan={0}>
      <HotelNavList></HotelNavList>
    </GridItem>
    <GridItem colSpan={2}>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <SimpleGrid columns={3} spacingX="400px" spacingY="450px">
          {hotels.data?.map((hotel) => (
            <Box bg="tomato" height="80px">
              <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box sx={{ mt: 5, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <SimpleGrid columns={2} spacingX="352" spacingY="450px">
          {hotels.data?.map((hotel) => (
            <Box bg="tomato" height="80px">
              <Hotel key={hotel.hotelId} hotel={hotel}></Hotel>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </GridItem>
  </Grid>
  )
}
