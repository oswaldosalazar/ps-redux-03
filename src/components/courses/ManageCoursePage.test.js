import React from 'react';
import { mount, configure } from 'enzyme';
import { authors, newCourse, courses } from '../../../tools/mockData';
import { ManageCoursePage } from './ManageCoursePage';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursePage {...props} />);
  //Passing the Provider method. Need to import Provider and the store
  // return mount(<Provider store={store}><ManageCoursePage /></Provider>)
}

it('sets error when attempting to save an empty title field', () => {
  const wrapper = render();
  wrapper.find('form').simulate('submit');
  const error = wrapper.find('.alert').first();
  expect(error.text()).toBe('Title is required.');
});
