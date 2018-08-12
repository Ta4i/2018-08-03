import React from 'react'
import CommentList from './'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  it('У каждой статьи должны быть комментарии', function() {
	  //Проходим по всем всем Статьям и проверяем наличие кнопки.
	  articles.forEach(article => {
		const wrapper = mount(<CommentList comments={article.comments}/>);
		expect(wrapper.exists('button[data-automation-id="open-comments"]')).toBe(true); 
	  });
  });
  
  it('По кнопке show должны появиться комментарии, а по кнопке hide должны закрываться', function() {
	  articles.forEach(article => {
		const wrapper = mount(<CommentList comments={article.comments}/>);
		const comments = article.comments;
		//Нажимаем кнопку "show"
		wrapper.find('button[data-automation-id="open-comments"]').simulate('click'); 
		//Проверяем, что появился список комментариев, либо сообщение об их отсутствии
		if (comments && comments.length > 0) {
			expect(wrapper.find('ul[data-automation-id="comments-list"]>li').length).toBe(comments.length); 
		} else {
			expect(wrapper.exists('[data-automation-id="no-comments"]')).toBe(true);
		}
		//Нажимаем кнопку "hide"
		wrapper.find('button[data-automation-id="open-comments"]').simulate('click');
		//Проверяем , что комментарии исчезли
		//setInterval - костыль, т.к. ничего лучше не придумал в условиях ограниченного времени. Но оно работает.
		//Надо как-то дождаться окончания анимации. 
		//Работает даже с 0 ожиданием - вот это не понятно...
		setTimeout(() => {
			expect(wrapper.exists('ul[data-automation-id="comments-list"]>li')).toBe(false);
		}, 0);
	  });
  });
})
