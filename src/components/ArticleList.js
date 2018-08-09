import * as React from "react";
import Select from "react-select";
import { Article } from "./Article";
/*import DatePicker from 'react-date-picker';*/

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null,
    inputValue: "",
    date: new Date()
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        UserName:{" "}
        <input value={this.state.inputValue} onChange={this.onChange} />
        {/*<DatePicker />*/}
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
    console.log(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  toggleVisibility = id => {
    this.setState({
      openArticleId: this.state.openArticleId === id ? null : id
    });
  };
}
