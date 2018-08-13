import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import AnimateHeight from 'react-animate-height'
import animationParameters from './../../animation-parameters'
import './article.css'

class Article extends PureComponent {
  static animationDuration = animationParameters.time.m

  render() {
    const { article, isOpen, index } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={`open-article-${index}`} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <AnimateHeight
          duration={Article.animationDuration}
          height={isOpen ? 'auto' : '0'}
        >
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={Article.animationDuration}
            transitionLeaveTimeout={Article.animationDuration}
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
