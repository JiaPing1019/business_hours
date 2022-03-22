import React from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DayList = ({ dayItems }) => {
  return (
    <>
      <Typography variant="h5" align="center">
        Opening Hour List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day of week</TableCell>
              <TableCell>Open time</TableCell>
              <TableCell>Close time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dayItems.map((dayItem) => (
              <TableRow
                key={dayItem.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {dayItem.dayOfWeek}
                </TableCell>
                <TableCell>{dayItem.openTime.toString()}</TableCell>
                <TableCell>{dayItem.closeTime.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DayList;
