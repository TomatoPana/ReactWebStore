import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
