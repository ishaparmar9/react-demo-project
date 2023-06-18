import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const AddCountry = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        Add City
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <TextField label="City Name" id="cityName" size="small" sx={{width: '100%'}}/>
        </Grid>
        <Grid item xs={6}>
          <TextField label="City Name" id="cityName" size="small" sx={{width: '100%'}}/>
        </Grid>
      </Grid>
    </>
  );
};
export default AddCountry;
