import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelect } from '../../action-creators'

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

  handleChange = (selected) => this.props.changeDateRange({ selected })

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default connect(
  (state) => ({
    select: state.select,
    articles: state.articles
  }),
  (dispatch) => ({
    changeDateRange: (values) => dispatch(changeSelect(values))
  })
)(SelectFilter)
