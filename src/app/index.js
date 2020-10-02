import React from 'react';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Content from './components/Content';

import Home from './views/Home';
import RepositoryDetails from './views/RepositoryDetails';

import {
  Container,
  MainTitle,
  MainLogo,
} from './styles'

function App() {
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to="/">
        <MainTitle>
          <MainLogo src={require('app/assets/icons/repository.svg')}/>
          RepoFinder
        </MainTitle>
      </Link>
      <Content>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={RepositoryDetails} path="/repositories/:owner/:repo" />
        </Switch>
      </Content>
    </Container>
  );
}

export default App;
