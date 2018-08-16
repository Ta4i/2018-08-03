import React from 'react'
import CommentList from './comment-list'
import Comment from '../comment'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', function() {
  it('should open a comments', function(done) {
    const wrapper = mount(<CommentList />)

    wrapper.find('[data-automation-id="open-comments"]').simulate('click')

    expect(wrapper.find('.cl-ul').length).toBe(1)

    //expect(wrapper.find('[data-automation-id="open-comments"]').length).toBe(1);

    //wrapper.find('button').simulate('click');
    //
  })
})
