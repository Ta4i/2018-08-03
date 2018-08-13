import React from 'react'
import CommentList from './'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'
import animationParameters from './../../animation-parameters'

Enzyme.configure({ adapter: new Adapter() })

function getCommentList(articles) {
  return articles.reduce((sum, article) => {
    const comments = article.comments || []
    return sum.concat(comments)
  }, [])
}

describe('CommentList', function() {
  it('should render all comments', function() {
    const comments = getCommentList(articles)
    const wrapper = mount(<CommentList comments={comments} />)
    wrapper.find('.open-comments').simulate('click')

    expect(wrapper.find('.comment').length).toBe(16)
  })
})
