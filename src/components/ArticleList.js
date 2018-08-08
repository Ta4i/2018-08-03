import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
import DatePicker from "react-date-picker";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: "",
    dateMin: null,
    dateMax: null
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        <DatePicker
          onChange={data => this.handleChangeData("min", data)}
          value={this.state.dateMin}
        />
        -
        <DatePicker
          onChange={data => this.handleChangeData("max", data)}
          value={this.state.dateMax}
        />
        <br />
        UserName:{" "}
        <input value={this.state.inputValue} onChange={this.onChange} />
        <Select
          value={{
            value: articles[0].id,
            label: articles[0].title
          }}
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
        />
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

  formatDate = date => {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  };

  handleChangeData = (type, date) => {
    switch (type) {
      case "min":
        this.setState({
          dateMin: date,
          inputValue:
            this.state.dateMax != null && date != null
              ? this.formatDate(date) +
                " - " +
                this.formatDate(this.state.dateMax)
              : ""
        });
        break;
      case "max":
        this.setState({
          dateMax: date,
          inputValue:
            this.state.dateMin != null && date != null
              ? this.formatDate(this.state.dateMin) +
                " - " +
                this.formatDate(date)
              : ""
        });
        break;
      default:
        throw new Error("Unknown date-type!");
    }
  };

  onChangeMinDate = date => {
    this.setState({ dateMin: date });
  };

  onChangeMaxDate = (date, evt) => {
    console.log(this);
    console.log(evt);
    this.setState({ dateMax: date });
  };

  onChange = event => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  toggleVisibility = id => {
    this.setState({
      openArticleId: id !== this.state.openArticleId ? id : null
    });
  };
}
