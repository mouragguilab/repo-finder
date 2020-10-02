import React from 'react';
import { shallow } from 'enzyme';

import Home from 'app/views/Home';
import ButtonSearch from 'app/views/Home/components/ButtonSearch';
import RepositoryList from 'app/views/Home/components/RepositoryList';

const setHookState = (newState = {}) => {
  return (state = {}) => [ state === false ? state : newState, () => {} ];
}

it('Check if the search button is being rendered on the Home page', () => {
  const wrapper = shallow(<Home />);
  
  expect(wrapper.find(ButtonSearch)).toHaveLength(1);
});

it('Check if the repositories list is being rendered on the Home page', () => {
  React.useState = setHookState([{}])

  const wrapper = shallow(<Home />);

  expect(wrapper.find(RepositoryList)).toHaveLength(1);
});