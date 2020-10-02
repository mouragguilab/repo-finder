import React from 'react';

import {
  Container,
  GithubIcon,
} from './styles'

function ButtonSearch({ disabled = false, onClick = () => {} }) {
  return (
    <Container disabled={disabled} onClick={onClick}>
      <GithubIcon
        disabled={disabled}
        src={require('app/assets/icons/github-logo.svg')}
      />
      Buscar repositórios
    </Container>
  );
}

export default ButtonSearch;