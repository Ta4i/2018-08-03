import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    openBtnStance: null,
    inputValue: "",
    tags: []
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        UserName:{" "}
        <input value={this.state.inputValue} onChange={this.onChange} />
        <Select
          name="form-field-name"
          isMulti={true}
          value={this.state.tags}
          options={articles.map(article => ({
            value: article.id,
            label: article.title
          }))}
          onChange={e => this.setState({ tags: e })}
        />
        <ul>
          {articles.map(article => (
            <Article
              key={article.id}
              article={article}
              isOpen={
                this.state.openArticleId === article.id &&
                this.state.openBtnStance === true
              }
              toggleVisibility={this.toggleVisibility}
            />
          ))}
        </ul>
      </div>
    );
  }

  onChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  toggleVisibility = (id, stance) => {
    this.setState({
      openArticleId: id,
      openBtnStance: stance
    });
  };
}
