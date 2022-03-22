import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import TimePicker from "@mui/lab/TimePicker";
import Checkbox from "@mui/material/Checkbox";

const DayItem = ({
  dayItem,
  handleOpenChange,
  handleCloseChange,
  handleSaveChanges,
}) => {
  return (
    <Card sx={{ minHeight: 70, m: "10px", display: "flex" }}>
      <Grid container dsiplay="flex" direction="row" alignItems="center">
        <Grid item xs={1} style={{ textAlign: "center" }}>
          <Checkbox
            color="success"
            onChange={(e) => handleSaveChanges(dayItem.id, e)}
          />
        </Grid>
        <Grid item xs={1}>
          {dayItem.dayOfWeek}
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={9}>
          {dayItem.isEnable ? (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Open"
                value={dayItem.openTime}
                onChange={(e) => handleOpenChange(dayItem.id, e)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 4 }} />
                )}
              />
              <TimePicker
                label="Close"
                value={dayItem.closeTime}
                onChange={(e) => handleCloseChange(dayItem.id, e)}
                renderInput={(params) => (
                  <TextField {...params} />
                )}
              />
            </LocalizationProvider>
          ) : null}
        </Grid>
      </Grid>
    </Card>
  );
};

export default DayItem;
