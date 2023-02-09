import React from 'react'
import Category from '../category/Category'
import Hotel from '../hotel/Hotel'
import PopularHotel from '../hotel/PopularHotel'
import Questions from '../questions/Questions'
import ReservationInquire from '../reservation/ReservationInquire'

export default function Home() {
  return (
    <div>
        <ReservationInquire></ReservationInquire>
        <br></br>
        <PopularHotel></PopularHotel>
        <Hotel></Hotel>
        <Category></Category>
        <Questions></Questions>
    </div>
  )
}
