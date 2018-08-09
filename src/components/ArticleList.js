import React from "react";
import Select from "react-select";
import Article from "./Article";
import DateRange from "./DateRange";

import "./ArticleList.css";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: ""
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        <div className="row">
          UserName:{" "}
          <input value={this.state.inputValue} onChange={this.onChange} />
        </div>
        <div className="row">
          <Select
            options={articles.map(article => ({
              value: article.id,
              label: article.title
            }))}
            isMulti
          />
        </div>
        <div className="row">
          <DateRange />
        </div>
        <div className="row">
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
      </div>
    );
  }

  onChange = event => {
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  toggleVisibility = id => {
    if (id === this.state.openArticleId) {
      this.setState({
        openArticleId: null
      });
    } else {
      this.setState({
        openArticleId: id
      });
    }
  };
}
