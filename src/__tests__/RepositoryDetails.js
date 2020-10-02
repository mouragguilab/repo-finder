import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import RepositoryDetails from 'app/views/RepositoryDetails';
import RepositoryHeader from 'app/views/RepositoryDetails/components/RepositoryHeader';
import RepositoryInfo from 'app/views/RepositoryDetails/components/RepositoryInfo';
import RepositoryLangs from 'app/views/RepositoryDetails/components/RepositoryLangs';

const setHookState = (newState = {}) => {
  return (state = {}) => [ state === false ? state : newState, () => {} ];
}

it('Rendering of the RepositoryHeader component on the repository details page', () => {
  React.useState = setHookState({
    owner: {}
  })

  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/repositories/webyak/react-static-plate' ]}>
      <RepositoryDetails />
    </MemoryRouter>
  );

  expect(wrapper.find(RepositoryHeader).exists()).toEqual(true);
});

it('Rendering of the RepositoryInfo component on the repository details page', () => {
  React.useState = setHookState({
    owner: {}
  })

  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/repositories/webyak/react-static-plate' ]}>
      <RepositoryDetails />
    </MemoryRouter>
  );

  expect(wrapper.find(RepositoryInfo).exists()).toEqual(true);
});

it('Rendering of the RepositoryLangs component on the repository details page', () => {
  React.useState = setHookState({
    owner: {}
  })

  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/repositories/webyak/react-static-plate' ]}>
      <RepositoryDetails />
    </MemoryRouter>
  );

  expect(wrapper.find(RepositoryLangs).exists()).toEqual(true);
});
