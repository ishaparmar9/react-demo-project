import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { editRecord } from "../services/edit-country-service";


const EditCountry = () => {
  const [status, setStatus] = React.useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(+event.target.value);
  };
  const Record = {
    id: 34,
    name: "pakistan",
    status: 2
  }
  const handleEditData = () => {
    editRecord(34, Record);
  }
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "30px" }}
      >
        Edit Country
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
        <Grid item xs={12} sm={6}>
          <TextField label="Country Name" id="countryName" size="small" sx={{ width: '100%' }} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl sx={{ width: '100%', mt: {xs:2, sm:0} }} size="small">
            <InputLabel id="demo-select-small-label">Country Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Country Status"
              value={status.toString()}
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              minWidth: "100px",
              mt: {xs:3, sm:1}
            }}
            onClick={handleEditData}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default EditCountry;
