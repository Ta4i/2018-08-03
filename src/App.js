import React, { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import articles from "./fixtures";
import DatePicker from "react-date-picker";

class App extends Component {
  state = {
    minDate: new Date(),
    maxDate: new Date()
  };

  render() {
    return (
      <div className="App">
        <DatePicker
          onChange={this.onChangeMinDate}
          value={this.state.minDate}
        />
        <p>{this.state.minDate.toString()}</p>

        <DatePicker
          onChange={this.onChangeMaxDate}
          value={this.state.maxDate}
        />
        <p>{this.state.maxDate.toString()}</p>

        <ArticleList articles={articles} />
      </div>
    );
  }
  onChangeMinDate = minDate => {
    this.setState({ minDate });
  };
  onChangeMaxDate = maxDate => {
    this.setState({ maxDate });
  };
}

export default App;
