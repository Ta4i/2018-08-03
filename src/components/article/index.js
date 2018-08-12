import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './article.css'
import PropTypes from 'prop-types'

class Article extends PureComponent {
	static propTypes = {
	  article: PropTypes.object.isRequired,
	  isOpen: PropTypes.bool.isRequired,
	  index: PropTypes.number.isRequired,
	  toggleOpen: PropTypes.func.isRequired
	}
	
	static defaultProps = {
	  isOpen: false
	}
	
  render() {
    const { article, isOpen, index } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={`open-article-${index}`} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={5000}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
