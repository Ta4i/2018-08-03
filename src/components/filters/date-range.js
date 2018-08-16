import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../../action-creators'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  render() {
    const { from, to } = this.props
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
    const dateRange = DateUtils.addDayToRange(day, this.props)
    if (dateRange && dateRange.from && !dateRange.to) {
      dateRange.to = dateRange.from
    }
    console.log(dateRange)
    this.props.changeDateRange(dateRange)
  }
}

export default connect(
  (state) => ({
    from: state.date.from,
    to: state.date.to
  }),
  (dispatch) => ({
    changeDateRange: (dateRange) => dispatch(changeDateRange(dateRange))
  })
)(DateRange)
