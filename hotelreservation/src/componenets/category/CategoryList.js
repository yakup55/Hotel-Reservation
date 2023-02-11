import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../redux/actions/categoryActions";
import Category from "./Category";

export default function CategoryList() {
  const dispacth = useDispatch();
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    dispacth(getCategoryList());
  }, []);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {categories.map((category) => (
            <Grid item xs={3}>
              <Category
                key={category.categoryId}
                category={category}
              ></Category>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
