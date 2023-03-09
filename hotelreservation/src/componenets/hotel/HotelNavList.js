import { Heading } from "@chakra-ui/react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryList } from "../../redux/actions/categoryActions";
import { getCityList } from "../../redux/actions/cityActions";
import { getDegreList } from "../../redux/actions/degreActions";
import {
  getHotelList,
  hotelCityList,
  hotelCategoryList,
  hotelDegreList,
  hotelPriceList,
} from "../../redux/actions/hotelActions";

export default function HotelNavList() {
  const { degres } = useSelector((state) => state.degre);
  const { categories } = useSelector((state) => state.category);
  const { cities } = useSelector((state) => state.city);
  const { hotels } = useSelector((state) => state.hotel);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(getDegreList());
    dispacth(getCategoryList());
    dispacth(getCityList());
    dispacth(getHotelList());
  }, []);
  const cityList = (id) => {
    dispacth(hotelCityList(id));
  };
  const categoryList = (id) => {
    dispacth(hotelCategoryList(id));
  };
  const degreList = (id) => {
    dispacth(hotelDegreList(id));
  };
  const priceList = (price) => {
    dispacth(hotelPriceList(price));
  };
  return (
    <>
      <Heading>Filtreler</Heading>
      <FormControl>
        <FormLabel>Fiyata Göre</FormLabel>
        <TextField
          sx={{ mt: 2, mb: 2 }}
          color="success"
          label="Fiyatı Giriniz"
          onChange={(e) => priceList(e.target.value)}
        ></TextField>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Konuk Değerlendirmesi
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {degres.data?.map((degre) => (
            <FormControlLabel
              onClick={() => degreList(degre.degreId)}
              value={degre.degreName}
              control={<Radio />}
              label={`${degre.degreName}-${degre.degreValue}`}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Tatil Temaları
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {categories.data?.map((category) => (
            <FormControlLabel
              onClick={() => categoryList(category.categoryId)}
              value={category.categoryName}
              control={<Radio />}
              label={category.categoryName}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Şehire Göre Listele
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {cities.data?.map((city) => (
            <FormControlLabel
              onClick={() => cityList(city.cityId)}
              value={city.cityId}
              control={<Radio />}
              label={city.cityName}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}
