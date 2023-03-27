import { Box, SimpleGrid } from "@chakra-ui/react";
import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryList,
  LastCategory,
} from "../../redux/actions/categoryActions";
import Footer from "../footer/Footer";
import Category from "./Category";

export default function CategoryList() {
  const dispacth = useDispatch();
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    dispacth(getCategoryList());
  }, [dispacth]);
  return (
    <>
      <Typography mt={10} variant="h5" fontStyle={"italic"}>
        Tatil Temaları
      </Typography>

      <SimpleGrid ml={10} mb={50} minChildWidth="150px" spacing="10px">
        {categories.data?.map((category) => (
          <Box height="250px">
            <Category key={category.categoryId} category={category}></Category>
          </Box>
        ))}
      </SimpleGrid>
     
    </>
  );
}
