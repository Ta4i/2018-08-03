import React, { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import articles from "./fixtures";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shownArticleList: articles
    };

    this.handleArticleFilter.bind(this);
  }

  render() {
    return (
      <div className="App container">
        <ArticleList
          articles={this.state.shownArticleList}
          handleArticleFilter={this.handleArticleFilter}
        />
      </div>
    );
  }

  handleArticleFilter = art => {
    this.setState({
      shownArticleList: art
    });
  };
}

export default App;
