import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
import Calendar from "./Calendar";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: ""
  };

  onChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  toggleVisibility = id => {
    if (this.state.openArticleId !== id) {
      this.setState({
        openArticleId: id
      });
    } else {
      this.setState({
        openArticleId: null
      });
    }
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        UserName:{" "}
        <input value={this.state.inputValue} onChange={this.onChange} />
        <Select
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
          isMulti
        />
        <Calendar />
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
}
