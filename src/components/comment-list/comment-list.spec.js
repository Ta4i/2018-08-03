import React from 'react'
import CommentList from './comment-list'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'
import ArticleList from '../article-list'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', function() {
  it('should render', function() {
    const wrapper = mount(<ArticleList articles={articles} />)
    //expect(wrapper.find('.article').length).toBe(7);

    wrapper.find('.article').forEach(function(article) {
      article.find('button').simulate('click')
    })
    //expect(wrapper.find('[data-automation-id="open-comments"]').length).toBe(7);

    //считаем количество кнопок, которые открывают список комментариев
    let commentListBtnsCount = wrapper.find(
      '[data-automation-id="open-comments"]'
    ).length

    wrapper
      .find('[data-automation-id="open-comments"]')
      .forEach(function(commentList) {
        commentList.simulate('click')
      })

    //тест должен падать, так как кол-во кнопок больше, чем реальных списков комментариев
    expect(wrapper.find('.CommentList ul').length).toBe(
      commentListBtnsCount - 1
    )
  })
})
