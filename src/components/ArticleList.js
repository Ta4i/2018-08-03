import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
import DatePicker from "react-date-picker";
import decorator from "./decorator";
import TogglerController from "./TogglerController";

// безполезная обертка. для теста как раотает
const DecDatePicker = decorator(DatePicker);

export default class ArticleList extends React.Component {
  state = {
    selectValue: [],
    formValue: {},
    datePickerValue: [new Date(), new Date()]
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        UserName:{" "}
        <input
          name="first_name"
          value={this.state.formValue["first_name"]}
          placeholder="Имя"
          onChange={this.handleInputChange}
        />
        <input
          name="second_name"
          value={this.state.formValue["second_name"]}
          placeholder="Фамилия"
          onChange={this.handleInputChange}
        />
        <Select
          value={this.state.selectValue}
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
          isMulti
          onChange={this.onChangeSelect}
        />
        <DecDatePicker
          selectRange
          value={this.state.datePickerValue}
          onChange={this.onChangeDate}
        />
        <p>
          {this.state.datePickerValue &&
            `${this.state.datePickerValue[0].toDateString()} — ${this.state.datePickerValue[1].toDateString()}`}
        </p>
        <ul>
          <TogglerController itemClass={Article} items={articles} />
        </ul>
      </div>
    );
  }

  handleInputChange = event => {
    // храним в стейте объект со всеми значениями формы для удобства
    this.setState({
      formValue: {
        ...this.state.formValue,
        [event.target.name]: event.target.value
      }
    });
  };

  onChangeDate = value => {
    console.dir(value);
    this.setState({
      datePickerValue: value
    });
  };

  onChangeSelect = value => {
    this.setState({
      selectValue: value
    });
  };
}
