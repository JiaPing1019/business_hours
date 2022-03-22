import React, { useState, Fragment } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import TimePicker from "@mui/lab/TimePicker";
import Checkbox from "@mui/material/Checkbox";

function DayItem(dayEntry) {
  const [openTime, setOpenTime] = useState(new Date(""));
  const [closeTime, setCloseTime] = useState(new Date(""));

  const [dayDetail, setDayDetail] = useState({
    dayOfWeek: "",
    openTime: "",
    closeTime: "",
  });
  const [showTimeSelector, setShowTimeSelector] = React.useState(false);
  const [dayItems, setDayItems] = useState({});

  const handleOpenChange = (value) => {
    setOpenTime(value);
    setDayDetail({
      day: dayEntry,
      open: 'value',
      close: "",
    });
    setDayItems({ dayOfWeek: dayEntry, open: value, close: ''});
  };

  const handleCloseChange = (value) => {
    setCloseTime(value);
    setDayDetail({
      day: dayEntry,
      open: "",
      close: value,
    });
  };

  return (
    <Card sx={{ maxWidth: 800, height: 80, m: "10px" }}>
      <Checkbox
        color="success"
        onChange={() => setShowTimeSelector(!showTimeSelector)}
      />
      {dayEntry}
      {showTimeSelector ? (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Open"
            value={openTime}
            onChange={handleOpenChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Close"
            value={closeTime}
            onChange={handleCloseChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      ) : null}
    </Card>
  );
}

export default DayItem;
