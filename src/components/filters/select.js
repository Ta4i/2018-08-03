import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectArticles } from '../../action-creators'

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    selected: state.selected
  }
}

class SelectFilter extends Component {
  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }

  handleChange = (selected) => {
    this.props.selectArticles(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default connect(
  mapStateToProps,
  { selectArticles }
)(SelectFilter)
