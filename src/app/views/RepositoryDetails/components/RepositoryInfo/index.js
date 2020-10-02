import React from 'react';
import { formatNumber } from 'app/abstraction';

import {
  Container,
  InfoIcon,
  InfoKey,
  InfoValue,
} from './styles'

function RepositoryInfo({ repository }) {
  return (
    <Container>
      <tbody>
        <tr>
          <InfoKey>
            <div>
              <InfoIcon
                src={require('app/assets/icons/github-star-rate.svg')}
              />
              Avaliações
            </div>
          </InfoKey>
          <InfoValue>
            {formatNumber(repository.stargazers_count)}
          </InfoValue>
        </tr>
        <tr>
          <InfoKey>
            <div>
              <InfoIcon
                src={require('app/assets/icons/github-issues.svg')}
              />
              Issues
            </div>
          </InfoKey>
          <InfoValue>
            {formatNumber(repository.open_issues_count)}
          </InfoValue>
        </tr>
        <tr>
          <InfoKey>
            <div>
              <InfoIcon
                src={require('app/assets/icons/github-forks.svg')}
              />
              Forks
            </div>
          </InfoKey>
          <InfoValue>
            {formatNumber(repository.forks)}
          </InfoValue>
        </tr>
        <tr>
          <InfoKey>
            <div>
              <InfoIcon
                src={require('app/assets/icons/github-watchers.svg')}
              />
              Watchers
            </div>
          </InfoKey>
          <InfoValue>
            {formatNumber(repository.watchers)}
          </InfoValue>
        </tr>
      </tbody>
    </Container>
  );
}

export default RepositoryInfo;