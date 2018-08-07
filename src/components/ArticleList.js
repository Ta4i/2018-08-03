import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
import DatePicker from "react-date-picker";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: "",
    selectValue: [],
    datePickerValue: new Date()
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        UserName:{" "}
        <input value={this.state.inputValue} onChange={this.onChange} />
        <Select
          value={this.state.selectValue}
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
          isMulti
          onChange={this.onChangeSelect}
        />
        <DatePicker
          selectRange
          value={this.state.datePickerValue}
          onChange={this.onChangeDate}
        />
        <p>
          {this.state.datePickerValue.length === 2 &&
            `${this.state.datePickerValue[0]} — ${
              this.state.datePickerValue[1]
            }`}
        </p>
        <ul>
          {articles.map(article => (
            <Article
              key={article.id}
              article={article}
              isOpen={this.state.openArticleId === article.id}
              toggleVisibility={this.toggleVisibility}
            />
          ))}
        </ul>
      </div>
    );
  }

  onChange = event => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
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

  toggleVisibility = id => {
    this.setState({
      openArticleId: id === this.state.openArticleId ? null : id
    });
  };
}
