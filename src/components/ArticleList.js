import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Comment } from "./Comment";

import "react-datepicker/dist/react-datepicker.css";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: "",
    isOpen: false,
    startDate: moment(),
    endDate: moment().add(1, "week")
  };

  render() {
    const { articles } = this.props;
    const { start } = this.state.startDate;
    const { end } = this.state.startDate;
    return (
      <div>
        <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
        />
        <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
        />
        <p>
          Today:
          {start}
        </p>
        <p>Tomorrow: {end}</p>
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
              isOpen={
                this.state.openArticleId === article.id && this.state.isOpen
              }
              toggleVisibility={this.toggleVisibility}
            />
          ))}
        </ul>
        <Select
          isMulti
          name="articles"
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <p>Comments</p>
        <ul>
          {articles.title}
          {/* {articles.map(article => (
            //<Comment key={article.id} comment={article} />
          ))} */}
        </ul>
      </div>
    );
  }

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };
  onChange = event => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  toggleVisibility = id => {
    this.setState({
      openArticleId: id,
      isOpen: !this.state.isOpen
    });
  };
}
