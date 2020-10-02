import React from 'react';

import {
  Container,
  OwnerImage,
  OwnerName,
  RepoName,
} from './styles'

function RepositoryOwner({ repository }) {
  return (
    <Container>
      <OwnerImage src={repository.owner.avatar_url} />
      <h1>
        <OwnerName>
          <a rel="noopener noreferrer" target="_blank" href={repository.owner.html_url}>
            {repository.owner.login}
          </a>
        </OwnerName>
        <RepoName>
          <a rel="noopener noreferrer" target="_blank" href={repository.html_url}>
            {repository.name}
          </a>
        </RepoName>
      </h1>
      {repository.description && (
        <p style={{ textAlign: 'center' }}>
          {repository.description}
        </p>
      )}
    </Container>
  );
}

export default RepositoryOwner;