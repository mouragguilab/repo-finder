import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from 'app';
import Home from 'app/views/Home';
import RepositoryDetails from 'app/views/RepositoryDetails';

it('Renders without crashing', () => {
  shallow(<App />);
});

it('Rendering check on route /', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App />
    </MemoryRouter>
  );

  expect(wrapper.find(Home)).toHaveLength(1);
});

it('Rendering check on route /repositories/:owner/:repo', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/repositories/:owner/:repo' ]}>
      <App />
    </MemoryRouter>
  );
  
  expect(wrapper.find(RepositoryDetails)).toHaveLength(1);
});