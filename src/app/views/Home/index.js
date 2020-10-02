import React from 'react';
import api from 'app/api';
import BarLoader from 'react-spinners/BarLoader';
import { css } from "@emotion/core";

import ButtonSearch from './components/ButtonSearch';
import RepositoryList from './components/RepositoryList';

import {
  Container,
  ImageHomeContainer,
  ImageHome,
} from './styles';

function Home() {
  const [ repos, setRepos ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(false);

  const loadRepositories = () => {
    setLoading(true);

    api.fetch('repositories/getRepositories')
      .then(({ data }) => {
        setRepos(data.items);
        setLoading(false);
    });
  };

  const renderListOrLoading = () => {
    if (loading) {
      return (
        <BarLoader
          height={5}
          width={200}
          color={'#24292e'}
          css={css`display: block; margin: 50% auto;`}
        />
      );
    } else if (!repos) {
      return (
        <ImageHomeContainer>
          <ImageHome src={require('app/assets/icons/search.svg')}/>
        </ImageHomeContainer>
      )
    }

    return (
      <RepositoryList repositories={repos} />
    )
  }

  return (
    <Container>
      <ButtonSearch
        disabled={loading}
        onClick={loadRepositories}
      />
      {renderListOrLoading()}
    </Container>
  );
}

export default Home;