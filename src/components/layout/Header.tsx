import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Badge, 
  Menu, 
  MenuItem, 
  Box, 
  Avatar,
  Tooltip,
  Switch,
  FormControlLabel,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  AccountCircle,
  TextFields as FontSizeIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle }) => {
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode, largeFonts, toggleFontSize, language, setLanguage } = useThemeContext();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const isMenuOpen = Boolean(anchorEl);
  const isSettingsOpen = Boolean(settingsAnchorEl);
  const isNotificationsOpen = Boolean(notificationAnchorEl);

  // Handle profile menu open
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle settings menu open
  const handleSettingsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  // Handle notifications menu open
  const handleNotificationsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSettingsAnchorEl(null);
    setNotificationAnchorEl(null);
  };

  // Handle language change
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: 'white',
            textDecoration: 'none',
            fontWeight: 700,
            mr: 2,
            fontSize: { xs: '1.1rem', sm: '1.25rem' },
          }}
        >
          FitNest
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Notifications icon */}
        <Tooltip title="Notifications">
          <IconButton 
            color="inherit"
            onClick={handleNotificationsMenuOpen}
            sx={{ 
              display: { xs: 'none', sm: 'inline-flex' },
              mr: { xs: 0, sm: 1 }
            }}
          >
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Settings icon */}
        <Tooltip title="Settings">
          <IconButton 
            color="inherit"
            onClick={handleSettingsMenuOpen}
            sx={{ 
              display: { xs: 'none', sm: 'inline-flex' },
              mr: { xs: 0, sm: 1 }
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>

        {/* Profile icon */}
        <Tooltip title={user?.name || "Account"}>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ ml: { xs: 1, sm: 0 } }}
          >
            <Avatar sx={{ 
              width: { xs: 28, sm: 32 }, 
              height: { xs: 28, sm: 32 }, 
              bgcolor: 'secondary.main' 
            }}>
              {user?.name?.charAt(0) || <AccountCircle />}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Toolbar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Settings Menu */}
      <Menu
        anchorEl={settingsAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isSettingsOpen}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                icon={<LightModeIcon />}
                checkedIcon={<DarkModeIcon />}
              />
            }
            label={darkMode ? "Dark Mode" : "Light Mode"}
          />
        </MenuItem>
        
        <MenuItem>
          <FormControlLabel
            control={
              <Switch
                checked={largeFonts}
                onChange={toggleFontSize}
                icon={<FontSizeIcon fontSize="small" />}
                checkedIcon={<FontSizeIcon />}
              />
            }
            label={largeFonts ? "Large Fonts" : "Standard Fonts"}
          />
        </MenuItem>

        <MenuItem>
          <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
              label="Language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </FormControl>
        </MenuItem>
      </Menu>

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationAnchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNotificationsOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            width: 320,
            maxHeight: 400
          }
        }}
      >
        <MenuItem sx={{ justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" fontWeight="bold">Notifications</Typography>
          <Typography 
            variant="body2" 
            color="primary" 
            sx={{ cursor: 'pointer' }}
            onClick={handleMenuClose}
          >
            Mark all as read
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Box>
            <Typography variant="body2" fontWeight="bold">New workout plan available</Typography>
            <Typography variant="body2" color="text.secondary">10 minutes ago</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Box>
            <Typography variant="body2" fontWeight="bold">Reminder: Log today's meals</Typography>
            <Typography variant="body2" color="text.secondary">1 hour ago</Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Box>
            <Typography variant="body2" fontWeight="bold">Coach Tom left a comment on your workout</Typography>
            <Typography variant="body2" color="text.secondary">Yesterday</Typography>
          </Box>
        </MenuItem>
        <MenuItem component={Link} to="/notifications" onClick={handleMenuClose}>
          <Typography color="primary">View all notifications</Typography>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
