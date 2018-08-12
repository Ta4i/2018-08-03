import React from 'react'
import Article from './'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'
import toggleOpen from '../../decorators/toggleOpen'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  it('По кнопке show должна появиться статья', function() {
	  const index = 0; //Все кнопки имеют index=0, т.к. это не особо важно
	  const isOpen = false; //Все статьи по-умолчанию закрыты
	  articles.forEach(article => {
		const wrapper = mount(<Article article={article} isOpen={isOpen} index={index} toggleOpen={toggleOpen}/>);
		wrapper.find(`.open-article-${index}`).simulate('click');
		//Костылечек. Хз как дождаться анимации.
		setTimeout(() => {
			expect(wrapper.exists('section')).toBe(true);
		}, 0);
	  });
  });
  
  it('По кнопке hide должна скрыться статья', function() {
	  const index = 0; //Все кнопки имеют index=0, т.к. это не особо важно
	  const isOpen = false; //Все статьи по-умолчанию закрыты
	  articles.forEach(article => {
		const wrapper = mount(<Article article={article} isOpen={isOpen} index={index} toggleOpen={toggleOpen}/>);
		wrapper.find(`.open-article-${index}`).simulate('click');
		//Костылечек. Хз как дождаться анимации.
		setTimeout(() => {
			expect(wrapper.exists('section')).toBe(false);
		}, 0);
	  });
  });
})
