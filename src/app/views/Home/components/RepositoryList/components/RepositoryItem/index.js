import React from 'react';
import githubColors from 'app/assets/data/github-lang-colors.json';

import {
  Container,
  LangName,
  ItemLink,
  LangContainer,
} from './styles'

function RepositoryItem({ repository }) {
  return (
    <Container>
      <ItemLink to={`/repositories/${repository.owner.login}/${repository.name}`}>
        { repository.name }
        <LangContainer>
          <LangName color={githubColors[repository.language]}>
            { repository.language }
          </LangName>
        </LangContainer>
      </ItemLink>
    </Container>
  );
}

export default RepositoryItem;