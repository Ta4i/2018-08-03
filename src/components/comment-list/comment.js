import React, { PureComponent } from 'react'
import Loader from '../common/loader'
import { connect } from 'react-redux'
import { createCommentSelector } from '../../selectors'

class Comment extends PureComponent {
  render() {
    if (!this.props.comment) {
      return null
    }
    const { loaded } = this.props.comment
    return loaded ? this.getBody() : <Loader />
  }
  getBody() {
    const {
      entities: { user, text }
    } = this.props.comment
    return (
      <React.Fragment>
        {text}
        <b> by {user}</b>
      </React.Fragment>
    )
  }
}

const createMapsToProps = () => {
  const memoizedSelector = createCommentSelector()

  return (state, ownProps) => {
    return memoizedSelector(state, ownProps)
  }
}

export default connect(createMapsToProps)(Comment)
