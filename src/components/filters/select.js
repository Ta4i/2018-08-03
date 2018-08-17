import React, { Component } from 'react'
import Select from 'react-select'
import {DateUtils} from 'react-day-picker'
import {setSelected} from '../../action-creators'
import {connect} from 'react-redux'

class SelectFilter extends Component {
  /*state = {
    selected: null
  }*/

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
    this.props.setSelected(selected)
  }

  get options() {
    return this.props.articles
      .filter(article => 
        this.props.dates.from !== null && this.props.dates.to !== null ? DateUtils.isDayInRange(new Date(article.date), this.props.dates) : true)
      .map((article) => ({
      label: article.title,
      value: article.id
    }))
  }
}

export default connect(
  null,
  (dispatch) => ({
    setSelected: (selected) => dispatch(setSelected(selected))
  }))(
    SelectFilter
)
