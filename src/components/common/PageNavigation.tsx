import React from 'react';
import {
  Box,
  Button,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

interface PageNavigationProps {
  title: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  backPath?: string;
  customActions?: React.ReactNode;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  title,
  showBackButton = true,
  showHomeButton = true,
  backPath,
  customActions
}) => {
  const navigate = useNavigate();
  const { darkMode } = useThemeContext();

  const handleBack = () => {
    if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1); // Go back to previous page
    }
  };

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={1}
      sx={{ 
        bgcolor: darkMode ? 'background.paper' : 'background.default',
        borderBottom: 1,
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Left side - Back button and title */}
          <Box display="flex" alignItems="center" gap={2}>
            {showBackButton && (
              <IconButton
                onClick={handleBack}
                color="primary"
                size="small"
                sx={{
                  border: 1,
                  borderColor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                  }
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            )}
            
            <Typography 
              variant="h6" 
              component="h1" 
              color="text.primary"
              fontWeight="bold"
            >
              {title}
            </Typography>
          </Box>

          {/* Right side - Navigation actions */}
          <Stack direction="row" spacing={2} alignItems="center">
            {showHomeButton && (
              <Button
                component={RouterLink}
                to="/"
                startIcon={<HomeIcon />}
                variant="outlined"
                size="small"
                color="primary"
              >
                Home
              </Button>
            )}
            
            <Button
              component={RouterLink}
              to="/dashboard"
              variant="contained"
              size="small"
              color="primary"
            >
              Dashboard
            </Button>
            
            {customActions}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PageNavigation;
