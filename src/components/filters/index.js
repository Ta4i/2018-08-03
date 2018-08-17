import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import {connect} from 'react-redux'

class Filters extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} dates={this.props.dates} ids={this.props.ids}/>
        <DateRange dates={this.props.dates} />
      </div>
    )
  }
}

export default connect((state) => ({ articles: state.articles.articles, dates: state.articles.dateFilter, ids: state.articles.idFilter }))(
  Filters
)

