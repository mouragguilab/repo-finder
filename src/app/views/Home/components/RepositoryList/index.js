import React from 'react';

import RepositoryItem from './components/RepositoryItem'

import {
  Container,
  Items,
} from './styles'

function RepositoryList({ repositories = [] }) {
  return (
    <Container>
      <Items>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo} />
        ))}
      </Items>
    </Container>
  );
}

export default RepositoryList;