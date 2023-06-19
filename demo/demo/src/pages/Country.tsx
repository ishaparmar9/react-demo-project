import React, { MouseEventHandler } from 'react';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Tooltip, Typography } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteModal from "../components/DeleteModal";
import { getCountries } from "../services/get-countries-service";
import {getRecord} from "../services/get-countryData-service";

interface Column {
  id: "id" | "name" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "Id", minWidth: 170, format: (value: number) => value.toLocaleString("en-US"), },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },

];

interface Data {
  id: number;
  name: string;
  status: number;
}


const CountryTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [values, setValues] = React.useState<Data[]>([]);
  React.useEffect(()=>{
    setValues(getCountries);
  })

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteCountry = (countryId: number) => {
    console.log("del" + countryId);
  };

  const fetchData: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    const data = getRecord(34);
    console.log(data);
  }

  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          mr: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Country
        </Typography>
        <Typography>
          <Link to="/country/add" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <AddOutlinedIcon sx={{ fontSize: "15px", mr: 0.5 }} />
              Add Country
            </Button>
          </Link>
        </Typography>
      </Typography>
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "80vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  key="crud"
                  align="right"
                  style={{ minWidth: "170px", fontWeight: "bold" }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row:Record<string, any>) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                    >
                      {columns.map((column: Record<string, any>) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                      <TableCell key="crud" align="right">
                        <Tooltip title="view" arrow>
                          <Button
                            variant="outlined"
                            style={{
                              fontSize: "9px",
                              marginRight: "3px",
                              minWidth: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <Link
                              to="/country/view"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              <VisibilityOutlinedIcon
                                sx={{ height: "15px", p: 0, m: 0 }}
                              />
                            </Link>
                          </Button>
                        </Tooltip>
                        <Tooltip title="edit" arrow>
                          <Button
                            variant="outlined"
                            style={{
                              fontSize: "9px",
                              marginRight: "3px",
                              minWidth: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <Link
                              to="/country/edit"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                              onClick={fetchData(row.id)}
                            >
                              <BorderColorIcon
                                sx={{ height: "15px", p: 0, m: 0 }}
                              />
                            </Link>
                          </Button>
                        </Tooltip>
                        <Tooltip title="delete" arrow>
                          <Button

                            style={{
                              fontSize: "9px",
                              minWidth: "15px",
                              fontWeight: "bold",
                              margin: "0px",
                              padding: "0px"
                            }}
                          >
                            <Typography
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              <DeleteModal countryId={row.id} onDelete={deleteCountry} />
                            </Typography>
                          </Button>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={values.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default CountryTable;