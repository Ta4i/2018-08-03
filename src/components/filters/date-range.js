import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import {setDates} from '../../action-creators'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  /*state = {
    dates: {from: null, to: null}
  }*/
 render() {
    const { from, to } = this.props.dates
    const selectedRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }

  handleDayClick = (day) => {
    this.props.setDates(DateUtils.addDayToRange(day, this.props.dates))
  }
}

export default connect(
  null,
  (dispatch) => ({
    setDates: (dates) => dispatch(setDates(dates))
  }))(
  DateRange
)
