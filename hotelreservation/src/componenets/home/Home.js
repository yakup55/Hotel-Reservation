import React from 'react'
import Hotel from '../hotel/Hotel'
import PopularHotel from '../hotel/PopularHotel'
import ReservationInquire from '../reservation/ReservationInquire'

export default function Home() {
  return (
    <div>
        <ReservationInquire></ReservationInquire>
        <br></br>
        <PopularHotel></PopularHotel>
        <Hotel></Hotel>
    </div>
  )
}
