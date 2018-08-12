import React from 'react'
import CommentList from './'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', () => {
  it('should render all comments', () => {
    const comments = articles[0].comments
    const wrapper = mount(<CommentList comments={comments} isOpen={true} />)
    expect(wrapper.find('.comment').length).toBe(5)
  })
})
