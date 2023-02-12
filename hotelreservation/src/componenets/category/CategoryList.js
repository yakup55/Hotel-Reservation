import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList, LastCategory } from "../../redux/actions/categoryActions";
import Category from "./Category";

export default function CategoryList() {
  const dispacth = useDispatch();
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    dispacth(LastCategory());
  }, []);
  return (
    <div>
        <Typography mt={10} variant="h5" fontStyle={"italic"}>Tatil Temaları</Typography>
      <Box sx={{ mt: 10, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {categories.data?.map((category)=>(
            <Grid item xs={3}>
            <Category key={category.categoryId} category={category} ></Category>
          </Grid>
          ))}
          
        </Grid>
      </Grid>
    </Box>
      <Box sx={{ mt: 10, flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          {categories.data?.map((category)=>(
            <Grid item xs={6}>
            <Category key={category.categoryId} category={category} ></Category>
          </Grid>
          ))}
          
        </Grid>
      </Grid>
    </Box>
    </div>
    
  );
}
