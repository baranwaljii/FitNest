import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper
} from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';
import { useThemeContext } from '../../context/ThemeContext';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  const { darkMode } = useThemeContext();
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: darkMode ? 'background.default' : '#f5f8fa',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4
        }}>
          {/* Brand Section */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              flex: 1,
              py: 5
            }}
          >
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(45deg, #4CAF50 30%, #80E27E 90%)',
                borderRadius: 3,
                p: 4,
                color: 'white'
              }}
            >
              <FitnessCenter sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                FitNest
              </Typography>
              <Typography variant="h6" gutterBottom>
                Your Personal Fitness Assistant
              </Typography>
              <Typography variant="body1">
                Track workouts, monitor nutrition, connect with coaches, and achieve your fitness goals all in one place.
              </Typography>
            </Paper>
          </Box>
          
          {/* Form Section */}
          <Box sx={{ flex: { md: 1.5 }, width: '100%' }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>
                {subtitle && (
                  <Typography variant="body1" color="text.secondary">
                    {subtitle}
                  </Typography>
                )}
              </Box>
              
              {children}
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
