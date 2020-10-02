import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from 'app/api';
import githubColors from 'app/assets/data/github-lang-colors.json';

import LangsProgress from './components/LangsProgress'

import {
  Container,
} from './styles'

function RepositoryLangs({ repository }) {
  const { owner, repo } = useParams();
  const [ langs, setLangs ] = useState([]);

 const buildObjectLangs = (langs) => {
   const sum = Object.values(langs).reduce((a, v) => a + v, 0);

   return Object.entries(langs)
    .sort(([ k1, v1 ], [k2, v2]) => v2 - v1)
    .reduce((a, [ key, value ]) => ([
      ...a,
      {
        name: key,
        color: githubColors[key],
        percentage: (value / sum) * 100
      }
    ]), [])
 };

 const loadLangs = () => {
  const payload = { owner, repo };
  
  api.fetch('repositories/getRepositoryLangs', payload)
      .then((res) => {
        setLangs(buildObjectLangs(res.data))
      })
 };

  useEffect(loadLangs, []);

  return (
    <Container>
      <LangsProgress langs={langs} />
    </Container>
  );
}

export default RepositoryLangs;