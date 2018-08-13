import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
import DatePicker from "react-date-picker";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: "",
    date: null
  };

  dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        Выберите даты:
        <DatePicker
          value={null}
          onChange={this.onChangeCalendar}
          selectRange={true}
        />
        <br />
        Диапазон дат:{" "}
        <input
          value={this.state.inputValue}
          onChange={this.onChange}
          style={{ width: "500px" }}
        />
        <Select
          /*value={{
                      value: articles[0].id,
                      label: articles[0].title
                    }}*/
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
          isMulti={true}
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

  onChange = event => {
    console.log("onChange", event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  onChangeCalendar = date => {
    //console.log('onChangeCalendar', date);
    this.setState({
      date: date && date.length ? date : null,
      inputValue:
        date && date.length
          ? [
              date[0].toLocaleString("ru", this.dateOptions),
              " - ",
              date[1].toLocaleString("ru", this.dateOptions)
            ].join(" ")
          : ""
    });
  };

  toggleVisibility = id => {
    this.setState({
      openArticleId: this.state.openArticleId === id ? null : id
    });
  };
}
