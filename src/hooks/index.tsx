import React from 'react';

import { CovidProvider } from './Covid';

const AppProvider: React.FC = ({ children }) => {
  return <CovidProvider>{children}</CovidProvider>;
};

export default AppProvider;
