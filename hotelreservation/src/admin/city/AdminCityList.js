import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function AdminCityList() {
    const dispacth=useDispatch();
    const navigate=useNavigate();
    const {cities}=useSelector((state)=>state.city)
  return (
    <div>AdminCityList</div>
  )
}
