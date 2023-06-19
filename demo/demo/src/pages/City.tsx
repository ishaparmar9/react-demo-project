import * as React from "react";
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
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link } from "react-router-dom";

interface Column {
  id: "name" | "code" | "population" | "size" ;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  return { name, code, population, size };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
          City
        </Typography>
        <Typography>
          <Link to="/city/add" style={{ textDecoration: "none" }}>
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
              Add City
            </Button>
          </Link>
        </Typography>
      </Typography>
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
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
                            >
                              <BorderColorIcon
                                sx={{ height: "15px", p: 0, m: 0 }}
                              />
                            </Link>
                          </Button>
                        </Tooltip>
                        <Tooltip title="delete" arrow>
                          <Button
                            variant="outlined"
                            style={{
                              fontSize: "9px",
                              minWidth: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            <Link
                              to="/country/delete"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              <DeleteOutlineOutlinedIcon
                                sx={{ height: "15px", p: 0, m: 0 }}
                              />
                            </Link>
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
