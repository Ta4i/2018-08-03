import * as React from "react";
import DatePicker from "react-datepicker/es";

export default class DateFilter extends React.Component {
  render() {
    const {
      handleChangeStart,
      handleChangeEnd,
      startDate,
      endDate
    } = this.props;
    return (
      <div>
        <div className="container my-3">
          <div className="row">
            <div className="col">
              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={handleChangeStart}
                dateFormat="DD/MM/YYYY"
              />
            </div>

            <div className="col">
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={handleChangeEnd}
                dateFormat="DD/MM/YYYY"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
