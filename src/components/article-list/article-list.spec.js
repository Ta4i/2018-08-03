import React from 'react'
import ArticleList from './'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  it('should render all articles', function() {
    const wrapper = mount(<ArticleList articles={articles} />)

    expect(wrapper.find('.article').length).toBe(7)
  })

  articles.forEach((article, index) => {
    const wrapper = mount(<ArticleList articles={articles} />)
    it(`should open articles only once`, function() {
      wrapper.find(`.open-article-${index}`).simulate('click')
      expect(wrapper.find('[data-automation-id="open-comments"]').length).toBe(
        1
      )
    })
  })

  articles.forEach((article, index) => {
    const wrapper = mount(<ArticleList articles={articles} />)
    it(`should open all article comments`, function() {
      wrapper.find(`.open-article-${index}`).simulate('click')
      wrapper.find('.open-comments').simulate('click')
      const comments = article.comments
      expect(wrapper.find('[data-automation-component="comment"]').length).toBe(
        comments ? comments.length : 0
      )
    })
  })

  it('should open a comments', function(done) {
    const wrapper = mount(
      <ArticleList
        articles={articles}
        fetchData={() => {
          done()
        }}
      />
    )
  })
})
