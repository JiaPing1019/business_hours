import DayItem from "./DayItem";
import DayList from "./DayList";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

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

const Week = () => {
  const [dayItems, setDayItems] = useState([]);
  const [saveDayItems, setSaveDayItems] = useState([]);
  const [defaultOpenTime, setDefaultOpenTime] = useState(new Date());
  const [defaultCloseTime, setDefaultCloseTime] = useState(new Date());

  useEffect(() => {
    setDayItems(initialWeek);
  }, []);

  const handleOpenTimeChange = (id, time) => {
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

    setDefaultOpenTime(time);
    setDayItems(updateList);
  };

  const handleCloseTImeChange = (id, time) => {
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
    setDefaultCloseTime(time);
  };

  const handleOnClickChanges = (targetDateItem) => {
    const updateList = dayItems.map((dayItem) => {
      if (dayItem.id === targetDateItem.id) {
        const updateDayItem = {
          ...dayItem,
          isEnable: !dayItem.isEnable,
          openTime: targetDateItem.openTime
            ? targetDateItem.openTime
            : defaultOpenTime,
          closeTime: dayItem.targetDateItem
            ? targetDateItem.closeTime
            : defaultCloseTime,
        };
        return updateDayItem;
      }
      return dayItem;
    });

    setDayItems(updateList);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const list = dayItems.filter((dayItem) => {
      if (validateDayItem(dayItem)) return dayItem;
    });

    setSaveDayItems(list);
  };

  const validateDayItem = (dayItem) => {
    // openTime and closeTime is not equal to empty string, null, and undefined
    // plus closeTime must be greater than openTime
    return (
      dayItem.isEnable &&
      dayItem.openTime !== "" &&
      !!dayItem.openTime &&
      dayItem.closeTime !== "" &&
      !!dayItem.closeTime &&
      new Date(dayItem.closeTime) > new Date(dayItem.openTime)
    );
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{
        mt: 3,
      }}
    >
      <Grid item xs={12}>
        {dayItems.map((dayItem) => {
          return (
            <DayItem
              key={dayItem.id}
              dayItem={dayItem}
              defaultOpenTime={
                dayItem.openTime ? dayItem.openTime : defaultOpenTime
              }
              defaultCloseTime={
                dayItem.closeTime ? dayItem.closeTime : defaultCloseTime
              }
              handleOpenTimeChange={handleOpenTimeChange}
              handleCloseTImeChange={handleCloseTImeChange}
              handleOnClickChanges={handleOnClickChanges}
            />
          );
        })}
        <Grid container item xs={12} justifyContent="flex-end">
          <Button
            variant="contained"
            color="success"
            onClick={handleSaveChanges}
          >
            SAVE CHANGES
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 10, mt: 10 }} />

      <Grid item xs={12}>
        <DayList dayItems={saveDayItems} />
      </Grid>
    </Grid>
  );
};

export default Week;
