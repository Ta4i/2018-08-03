import React from 'react'
import ArticleList from './'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'
import Article from '../article/article'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  //jest.setTimeout(10000);
  it('should open all of articles', function() {
    const wrapper = mount(<ArticleList articles={articles} />)

    wrapper.find(Article).forEach((article, i) => {
      let btn = article.find('button')
      btn.simulate('click')
      expect(
        wrapper
          .find(Article)
          .at(i)
          .find('section').length
      ).toBe(1)
    })
  })

  it('should open and close all of articles', (done) => {
    const wrapper = mount(<ArticleList articles={articles} />)
    const articlesCount = wrapper.find(Article).length
    const transitionDelay = 500 //ms
    const delay = articlesCount * transitionDelay

    wrapper.find(Article).forEach((article, i) => {
      let btn = article.find('button')
      //открываем статью
      btn.simulate('click')
      //закрываем статью
      btn.simulate('click')
    })

    //ждем окончания анимации css
    setTimeout(() => {
      wrapper.update()
      expect(wrapper.find('section').length).toBe(0)
      done()
    }, delay)
  })

  it('should find comments', () => {
    const wrapper = mount(<ArticleList articles={articles} />)

    wrapper.find(Article).forEach((article, i) => {
      //open article
      let btn = article.find('button')
      btn.simulate('click')

      //open comments
      let cBtn = wrapper
        .find(Article)
        .at(i)
        .find('[data-automation-id="open-comments"]')
      cBtn.simulate('click')

      //last article test should not pass
      try {
        expect(
          wrapper
            .find(Article)
            .at(i)
            .find('.CommentList ul').length
        ).toBe(1)
      } catch (e) {
        console.log('fail: ', e)
      }
    })
  })
})

/*describe('ArticleList', function() {
    it('should render all articles', function() {
        const wrapper = mount(<ArticleList articles={articles} />)

        expect(wrapper.find('.article').length).toBe(7)
    })

    it('should open comments', function(done) {
        const wrapper = mount(<ArticleList articles={articles} />)
        wrapper
            .find('.article > button')
            .at(0)
            .simulate('click')
        console.log('test 1')
        setTimeout(() => {
            try {
                expect(
                    wrapper.find('[data-automation-id="open-comments"]').length
                ).toBe(1)
                done()
            } catch (e) {
                done.fail(e)
            }
        }, 100)
    })

    it('should close comments', function(done) {
        const wrapper = mount(<ArticleList articles={articles} />)
        wrapper
            .find('.article > button')
            .at(0)
            .simulate('click')
        console.log('test 2')
        setTimeout(() => {
            try {
                expect(
                    wrapper.find('[data-automation-id="open-comments"]').length
                ).toBe(0)
                done()
            } catch (e) {
                done.fail(e)
            }
        }, 100)
    })

    it('should call fetchData', function(done) {
        const wrapper = mount(
            <ArticleList
                articles={articles}
                fetchData={() => {
                    done()
                }}
            />
        )
    })
});*/
