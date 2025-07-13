import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const authItems = [
    { label: 'Login', path: '/login', variant: 'text' as const },
    { label: 'Sign Up', path: '/register', variant: 'contained' as const },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {authItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mt: 2 }}>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ 
        background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(108, 92, 231, 0.2)',
      }}>
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 4 },
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 800,
              fontSize: { xs: '1.3rem', sm: '1.5rem' },
              background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            FitNest
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    color="inherit"
                    sx={{
                      textTransform: 'none',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {authItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    variant={item.variant}
                    sx={{ 
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: '25px',
                      px: 3,
                      ...(item.variant === 'contained' && {
                        background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #EE5A24 0%, #FF6B6B 100%)',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 6px 20px rgba(255, 107, 107, 0.6)',
                        },
                      }),
                      ...(item.variant === 'text' && {
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }),
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
