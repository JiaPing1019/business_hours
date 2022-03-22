import React from "react";

function DayDisplay({ dayItems }) {
  return (
    <div>
      {dayItems.map((d) => {
        return `dayOfWeek: ${d.dayOfWeek}, openTime: ${d.openTime}, closeTime: ${d.closeTime}`;
      })}
    </div>
  );
}

export default DayDisplay;
