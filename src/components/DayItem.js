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
  defaultOpenTime,
  defaultCloseTime,
  handleOpenTimeChange,
  handleCloseTImeChange,
  handleOnClickChanges,
}) => {
  return (
    <Card sx={{ minHeight: 80, mb: "10px", display: "flex" }}>
      <Grid container dsiplay="flex" direction="row" alignItems="center">
        <Grid item xs={4} sm={1}>
          <Checkbox
            color="success"
            onChange={(e) => handleOnClickChanges(dayItem, e)}
          />
        </Grid>
        <Grid item xs={8} sm={1}>
          {dayItem.dayOfWeek}
        </Grid>
        <Grid item xs={0} sm={1} />
        {dayItem.isEnable ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item xs={12} sm={3}>
              <TimePicker
                label="Open"
                value={defaultOpenTime}
                onChange={(e) => handleOpenTimeChange(dayItem.id, e)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={0} sm={1} />
            <Grid item xs={12} sm={3}>
              <TimePicker
                label="Close"
                value={defaultCloseTime}
                onChange={(e) => handleCloseTImeChange(dayItem.id, e)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </LocalizationProvider>
        ) : null}
      </Grid>
    </Card>
  );
};

export default DayItem;
