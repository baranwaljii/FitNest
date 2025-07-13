import React from 'react';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import { useThemeContext } from '../../context/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { darkMode } = useThemeContext();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <CssBaseline />
      
      {/* Header */}
      <Header onDrawerToggle={handleDrawerToggle} />
      
      {/* Sidebar */}
      <Sidebar 
        mobileOpen={mobileOpen} 
        onDrawerToggle={handleDrawerToggle}
        isMobile={isMobile} 
      />
      
      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 2, md: 3 },
          width: { 
            xs: '100%',
            sm: `calc(100% - 240px)` 
          },
          mt: { xs: 7, sm: 8 }, // below app bar
          bgcolor: darkMode ? 'background.default' : '#f5f8fa',
          overflow: 'auto',
          minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
