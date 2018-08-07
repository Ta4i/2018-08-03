import React, { Component } from "react";
import DatePicker from "react-date-picker";

class Calendar extends Component {
  state = {
    date: [new Date()]
  };

  onDateChange = date => {
    const newDate = this.state.date;
    newDate.push(date);
    this.setState({
      date: newDate
    });
  };

  render() {
    const { date } = this.state;
    const latestSelectedDate = date[date.length - 1];
    const uniqueKey = date => date.getDate() + date.getDay() + date.getHours();
    return (
      <div>
        <DatePicker onChange={this.onDateChange} value={latestSelectedDate} />
        <h2>Values selected by user</h2>
        <ul>
          {date.map(pickedDate => (
            <li key={uniqueKey(pickedDate)}>{pickedDate.toString()}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Calendar;
