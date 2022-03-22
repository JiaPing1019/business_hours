import DayItem from "./DayItem";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function Week() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [dayItems, setDayItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setDayItems([...dayItems, }])
  };

  

  return (
    <>
      {days.map((day) => DayItem(day))}
      <Button variant="contained" color="success" onClick={handleSubmit}>
        SAVE CHANGES
      </Button>
    </>
  );
}

export default Week;
