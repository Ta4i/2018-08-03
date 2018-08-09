import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

export default class DateRange extends React.Component {
  state = {
    startDate: moment(),
    endDate: moment()
  };

  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (startDate.isAfter(endDate)) {
      endDate = startDate;
    }

    this.setState({ startDate, endDate });
  };

  handleChangeEnd = endDate => this.handleChange({ endDate });

  render() {
    const { startDate, endDate } = this.state;
    return (
      <div>
        <DatePicker
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={this.handleChangeEnd}
        />
        <br />
        {moment(startDate).format("MMMM Do YYYY")}
        &nbsp;&mdash;&nbsp;
        {moment(endDate).format("MMMM Do YYYY")}
      </div>
    );
  }
}
