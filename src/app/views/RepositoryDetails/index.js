import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'app/api'
import { css } from '@emotion/core';
import BarLoader from 'react-spinners/BarLoader';

import RepositoryHeader from './components/RepositoryHeader';
import RepositoryInfo from './components/RepositoryInfo';
import RepositoryLangs from './components/RepositoryLangs';

import {
  Container,
} from './styles';

function RepositoryDetails () {
  const { owner, repo } = useParams();
  const [ loading, setLoading ] = React.useState(false);
  const [ repository, setRepository ] = React.useState(null);

  const loadRepository = () => {
    setLoading(true);
    const payload = { owner, repo }

    api.fetch('repositories/getRepository', payload)
      .then((res) => {
        setRepository(res.data)
        setLoading(false);
      })
  };

  useEffect(loadRepository, []);

  const renderLoadingOrTemplate = () => {
    if (loading || !repository) {
      return (
        <BarLoader
          height={5}
          width={200}
          color={'#24292e'}
          css={css`
            display: block;
            margin: 50% auto;
          `}
        />
      );
    } else {
      return (
        <>
          <RepositoryHeader repository={repository} />
          <RepositoryLangs />
          <RepositoryInfo repository={repository} />
        </>
      )
    }
  }

  return (
    <Container>
      {renderLoadingOrTemplate()}
    </Container>
  );
}

export default RepositoryDetails;