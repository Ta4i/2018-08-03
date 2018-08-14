import React, { Component } from 'react'
import DateRange from './date-range'
import SelectFilter from './select'
import PropTypes from 'prop-types'

class Filters extends Component {
  render() {
    return (
      <div>
        <SelectFilter articles={this.props.articles} />
        <DateRange />
      </div>
    )
  }
}

Filters.propTypes = {
  articles: PropTypes.array.isRequired
}

Filters.defaultProps = {
  articles: []
}

export default Filters
