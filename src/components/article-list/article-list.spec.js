import React from 'react'
import ArticleList from './'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  /*it('should render all articles', function() {
      const wrapper = mount(<ArticleList articles={articles} />)

      expect(wrapper.find('.article').length).toBe(7)
    })*/

  /*it('should open an article', function() {
      const wrapper = mount(<ArticleList articles={articles} />)
      wrapper.find('.open-article-0').simulate('click')
      expect(wrapper.find('[data-automation-id="open-comments"]').length).toBe(1)
    })*/

  /*it('should open all of articles', function() {
        const wrapper = mount(<ArticleList articles={articles} />);
        console.log(wrapper.props(), wrapper.state());

        let articlesElements = wrapper.find('.article');
        let articlesElementsCount = articlesElements.length;

        articlesElements.forEach(function(article){
          let a = article.find('button').simulate('click');
        });

        //проверяем все ли статьи открыты
        expect(wrapper.find('section').length).toBe(articlesElementsCount);

        //проверяем каждую статью на закрытие
        articlesElements.forEach(function(article){
            article.find('button').simulate('click');
            //expect(article.find('section').exists()).toBe(false);
        });

        expect(wrapper.find('section').length).toBe(0);
    });*/

  const wrapper = mount(<ArticleList articles={articles} />)

  it('should open all of articles', function() {
    //console.log('open', wrapper.props().articles, wrapper.state());

    let articlesElements = wrapper.find('.article')
    //let articlesElementsCount = articlesElements.length;

    articlesElements.forEach(function(article, i) {
      let btn = article.find('button')
      btn.simulate('click')

      let articleId = wrapper.props()['articles'][i]['id']
      //console.log(i, articleId, '->', wrapper.state('openItemId'));
      expect(articleId).toBe(wrapper.state('openItemId'))
    })
  })

  it('should close all of articles', function() {
    let articlesElements = wrapper.find('.article')
    //let articlesElementsCount = articlesElements.length;

    articlesElements.forEach(function(article, i) {
      //console.log(i, article.html());
      //let btn = article.find('.open-article-' + i);
      //btn.simulate('click');
      console.log(i, article.find('span').text())
    })

    //article.update();
    //expect(wrapper.find('section').length).toBe(0);
  })

  /*it('should open a comments', function(done) {
      const wrapper = mount(
        <ArticleList
          articles={articles}
          fetchData={() => {
            done()
          }}
        />
      )
    })*/
})
