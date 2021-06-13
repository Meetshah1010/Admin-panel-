import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-06-09T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid style={{marginTop:"-11px",marginLeft:"-25px"}} container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/yyyy"
          views={["year", "month"]}
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
