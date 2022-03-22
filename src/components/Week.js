import DayItem from "./DayItem";
import DayDisplay from "./DayDisplay";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

const initialWeek = [
  { id: 1, dayOfWeek: "Monday", openTime: "", closeTime: "", isEnable: false },
  { id: 2, dayOfWeek: "Tuesday", openTime: "", closeTime: "", isEnable: false },
  {
    id: 3,
    dayOfWeek: "Wednesday",
    openTime: "",
    closeTime: "",
    isEnable: false,
  },
  {
    id: 4,
    dayOfWeek: "Thursday",
    openTime: "",
    closeTime: "",
    isEnable: false,
  },
  { id: 5, dayOfWeek: "Friday", openTime: "", closeTime: "", isEnable: false },
  {
    id: 6,
    dayOfWeek: "Saturday",
    openTime: "",
    closeTime: "",
    isEnable: false,
  },
  { id: 7, dayOfWeek: "Sunday", openTime: "", closeTime: "", isEnable: false },
];

function Week() {
  const [dayItems, setDayItems] = useState([]);
  const [saveDayItems, setSaveDayItems] = useState([]);

  useEffect(() => {
    setDayItems(initialWeek);
  }, []);

  const handleOpenChange = (id, time) => {
    const updateList = dayItems.map((dayItem) => {
      if (dayItem.id === id) {
        const updateDayItem = {
          ...dayItem,
          openTime: time,
        };
        return updateDayItem;
      }
      return dayItem;
    });

    setDayItems(updateList);
  };

  const handleCloseChange = (id, time) => {
    const updateList = dayItems.map((dayItem) => {
      if (dayItem.id === id) {
        const updateDayItem = {
          ...dayItem,
          closeTime: time,
        };
        return updateDayItem;
      }
      return dayItem;
    });

    setDayItems(updateList);
  };

  const handleSaveChanges = (id, time) => {
    const updateList = dayItems.map((dayItem) => {
      if (dayItem.id === id) {
        const updateDayItem = {
          ...dayItem,
          isEnable: !dayItem.isEnable,
        };
        return updateDayItem;
      }
      return dayItem;
    });

    setDayItems(updateList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const list = dayItems.filter((dayItem) => {
      if (
        dayItem.isEnable &&
        dayItem.openTime !== "" &&
        dayItem.closeTime !== ""
      ) {
        return dayItem;
      }
    });

    setSaveDayItems(list);
  };
  console.log(saveDayItems);

  return (
    <Grid container direction="column">
      <Grid
        item
        xs={12}
        style={{ marginTop: 30, marginLeft: 30, maxWidth: 750 }}
      >
        {dayItems.map((d) => {
          return (
            <DayItem
              key={d.id}
              dayItem={d}
              handleOpenChange={handleOpenChange}
              handleCloseChange={handleCloseChange}
              handleSaveChanges={handleSaveChanges}
            />
          );
        })}
        <Grid container direction="row" justifyContent="flex-end">
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ align: "right" }}
          >
            SAVE CHANGES
          </Button>

          {saveDayItems.length > 0 ? (
            <DayDisplay dayItems={saveDayItems} />
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Week;
