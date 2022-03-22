import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import TimePicker from "@mui/lab/TimePicker";
import Checkbox from "@mui/material/Checkbox";

const DayItem = ({
  dayItem,
  handleOpenChange,
  handleCloseChange,
  handleOnClick,
}) => {
  return (
    <Card sx={{ maxWidth: 800, height: 80, m: "10px" }}>
      <Checkbox
        color="success"
        onChange={(e) => handleOnClick(dayItem.id, e)}
      />
      {dayItem.dayOfWeek}
      {dayItem.isEnable ? (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Open"
            value={dayItem.openTime}
            onChange={(e) => handleOpenChange(dayItem.id, e)}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Close"
            value={dayItem.closeTime}
            onChange={(e) => handleCloseChange(dayItem.id, e)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      ) : null}
    </Card>
  );
};

export default DayItem;
