/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import TopBar from '../../components/TopBar';
import SideBar from '../../components/SideBar';

export default function App() {
  const FlexContainer = styled.div`
    display: flex;
  `;

  const MainWindow = styled.div`
    flex-grow: 1;
    padding: 32px 24px;
  `;

  return (
    <div>
      <TopBar />
      <FlexContainer>
        <SideBar />
        <MainWindow>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainWindow>
      </FlexContainer>
      <GlobalStyle />
    </div>
  );
}
