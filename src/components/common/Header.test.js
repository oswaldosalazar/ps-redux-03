import React from 'react';
import Header from './Header';
import { mount, shallow, configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('contains 3 Navlinks via shallow', () => {
  const numLinks = shallow(<Header />).find('NavLink').length;
  expect(numLinks).toEqual(3);
});

it('contains 3 anchors via mount', () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find('a').length;

  expect(numAnchors).toEqual(3);
});
