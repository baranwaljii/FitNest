import React from 'react';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
