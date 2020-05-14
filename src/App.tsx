import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <GlobalStyle />

        <Header />
        <AppProvider>
          <Routes />
        </AppProvider>
      </Router>
    </>
  );
};

export default App;
