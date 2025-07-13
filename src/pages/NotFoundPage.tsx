import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SentimentDissatisfied } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';

const NotFoundPage: React.FC = () => {
  const { darkMode } = useThemeContext();
  
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: darkMode ? 
          'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)' : 
          'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)',
      }}
    >
      <Container maxWidth="md">
        <Box 
          sx={{ 
            textAlign: 'center',
            p: 5,
            borderRadius: 4,
            bgcolor: 'background.paper',
            boxShadow: 3,
          }}
        >
          <SentimentDissatisfied sx={{ fontSize: 100, color: 'primary.main', mb: 2 }} />
          
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            404
          </Typography>
          
          <Typography variant="h4" gutterBottom>
            Page Not Found
          </Typography>
          
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Sorry, we couldn't find the page you're looking for. 
            It might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              component={RouterLink} 
              to="/" 
              variant="contained" 
              color="primary"
              size="large"
            >
              Go to Homepage
            </Button>
            
            <Button 
              component={RouterLink} 
              to="/dashboard" 
              variant="outlined"
              size="large"
            >
              Go to Dashboard
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
