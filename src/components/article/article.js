import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import AnimateHeight from 'react-animate-height'
import './article.css'

class Article extends PureComponent {
  render() {
    const { article, isOpen, index } = this.props
    const animationDuration = 320
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={`open-article-${index}`} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <AnimateHeight
          duration={animationDuration}
          height={isOpen ? 'auto' : '0'}
        >
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={animationDuration}
            transitionLeaveTimeout={animationDuration}
          >
            {this.getBody()}
          </ReactCSSTransitionGroup>
        </AnimateHeight>
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
