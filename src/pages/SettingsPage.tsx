import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  FormGroup,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  TextField,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
  VolumeUp as VolumeIcon,
  FontDownload as FontIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
  Backup as BackupIcon,
  Info as InfoIcon,
  Help as HelpIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  CheckCircle as CheckIcon,
  Email as EmailIcon,
  Smartphone as MobileIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useThemeContext } from '../context/ThemeContext';
import MainLayout from '../components/layout/MainLayout';

interface NotificationSettings {
  workoutReminders: boolean;
  mealReminders: boolean;
  progressUpdates: boolean;
  socialNotifications: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private';
  shareWorkouts: boolean;
  shareProgress: boolean;
  dataCollection: boolean;
  analyticsTracking: boolean;
}

interface AccountSettings {
  username: string;
  email: string;
  phone: string;
  language: string;
  timezone: string;
  units: 'metric' | 'imperial';
}

const SettingsPage: React.FC = () => {
  const theme = useTheme();
  const { darkMode, largeFonts, language, toggleDarkMode, toggleFontSize, setLanguage } = useThemeContext();
  const [activeTab, setActiveTab] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [confirmDialog, setConfirmDialog] = useState({ open: false, title: '', message: '', action: () => {} });
  const [isEditing, setIsEditing] = useState(false);

  // Settings State  
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    workoutReminders: true,
    mealReminders: true,
    progressUpdates: true,
    socialNotifications: false,
    emailNotifications: true,
    pushNotifications: true,
  });

  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    profileVisibility: 'friends',
    shareWorkouts: true,
    shareProgress: false,
    dataCollection: true,
    analyticsTracking: false,
  });

  const [accountSettings, setAccountSettings] = useState<AccountSettings>({
    username: 'fitnessuser',
    email: 'user@example.com',
    phone: '+1234567890',
    language: language,
    timezone: 'UTC-5',
    units: 'metric',
  });

  const colorOptions = [
    { name: 'Purple', value: '#6C5CE7' },
    { name: 'Blue', value: '#74B9FF' },
    { name: 'Green', value: '#00B894' },
    { name: 'Orange', value: '#FF6B35' },
    { name: 'Pink', value: '#FD79A8' },
    { name: 'Red', value: '#E84393' },
  ];

  const handleSaveSettings = () => {
    // Simulate saving settings
    setTimeout(() => {
      setSnackbarMessage('Settings saved successfully!');
      setSnackbarOpen(true);
      setIsEditing(false);
    }, 500);
  };

  const handleResetSettings = () => {
    setConfirmDialog({
      open: true,
      title: 'Reset Settings',
      message: 'Are you sure you want to reset all settings to default? This action cannot be undone.',
      action: () => {
        // Reset to defaults
        localStorage.clear();
        window.location.reload(); // Reload to apply default theme
        setSnackbarMessage('Settings reset to default');
        setSnackbarOpen(true);
      }
    });
  };

  const handleExportData = () => {
    const data = {
      notifications: notificationSettings,
      privacy: privacySettings,
      account: accountSettings,
      theme: { darkMode, largeFonts, language },
      exportDate: new Date().toISOString(),
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fitnest-settings.json';
    a.click();
    
    setSnackbarMessage('Settings exported successfully!');
    setSnackbarOpen(true);
  };

  const settingsSections = [
    {
      title: 'Appearance',
      icon: <PaletteIcon />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Theme & Display</Typography>
          
          <FormGroup sx={{ mb: 3 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
              }
              label="Dark Mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={largeFonts}
                  onChange={toggleFontSize}
                />
              }
              label="Large Fonts"
            />
          </FormGroup>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" gutterBottom>Theme Color</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {colorOptions.map((color) => (
                <Box
                  key={color.value}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: color.value,
                    cursor: 'pointer',
                    border: theme.palette.primary.main === color.value ? '3px solid #fff' : '2px solid transparent',
                    boxShadow: theme.palette.primary.main === color.value ? '0 0 0 2px #000' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => {
                    // Note: This would require extending the theme context to support color changes
                    setSnackbarMessage('Primary color customization coming soon!');
                    setSnackbarOpen(true);
                  }}
                >
                  {theme.palette.primary.main === color.value && <CheckIcon sx={{ color: 'white', fontSize: 20 }} />}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )
    },
    {
      title: 'Notifications',
      icon: <NotificationsIcon />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Notification Preferences</Typography>
          
          <List>
            <ListItem>
              <ListItemIcon><VolumeIcon /></ListItemIcon>
              <ListItemText primary="Workout Reminders" secondary="Get notified about scheduled workouts" />
              <ListItemSecondaryAction>
                <Switch
                  checked={notificationSettings.workoutReminders}
                  onChange={(e) => setNotificationSettings(prev => ({ ...prev, workoutReminders: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>
            
            <ListItem>
              <ListItemIcon><VolumeIcon /></ListItemIcon>
              <ListItemText primary="Meal Reminders" secondary="Notifications for meal times and nutrition goals" />
              <ListItemSecondaryAction>
                <Switch
                  checked={notificationSettings.mealReminders}
                  onChange={(e) => setNotificationSettings(prev => ({ ...prev, mealReminders: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="Progress Updates" secondary="Weekly progress reports and achievements" />
              <ListItemSecondaryAction>
                <Switch
                  checked={notificationSettings.progressUpdates}
                  onChange={(e) => setNotificationSettings(prev => ({ ...prev, progressUpdates: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon><EmailIcon /></ListItemIcon>
              <ListItemText primary="Email Notifications" secondary="Receive notifications via email" />
              <ListItemSecondaryAction>
                <Switch
                  checked={notificationSettings.emailNotifications}
                  onChange={(e) => setNotificationSettings(prev => ({ ...prev, emailNotifications: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon><MobileIcon /></ListItemIcon>
              <ListItemText primary="Push Notifications" secondary="Mobile push notifications" />
              <ListItemSecondaryAction>
                <Switch
                  checked={notificationSettings.pushNotifications}
                  onChange={(e) => setNotificationSettings(prev => ({ ...prev, pushNotifications: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'Privacy & Security',
      icon: <SecurityIcon />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Privacy & Security Settings</Typography>
          
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Profile Visibility</InputLabel>
              <Select
                value={privacySettings.profileVisibility}
                onChange={(e) => setPrivacySettings(prev => ({ ...prev, profileVisibility: e.target.value as any }))}
                label="Profile Visibility"
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="friends">Friends Only</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <List>
            <ListItem>
              <ListItemText primary="Share Workouts" secondary="Allow others to see your workout activities" />
              <ListItemSecondaryAction>
                <Switch
                  checked={privacySettings.shareWorkouts}
                  onChange={(e) => setPrivacySettings(prev => ({ ...prev, shareWorkouts: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemText primary="Share Progress" secondary="Make your progress visible to friends" />
              <ListItemSecondaryAction>
                <Switch
                  checked={privacySettings.shareProgress}
                  onChange={(e) => setPrivacySettings(prev => ({ ...prev, shareProgress: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemText primary="Data Collection" secondary="Allow anonymous data collection for app improvement" />
              <ListItemSecondaryAction>
                <Switch
                  checked={privacySettings.dataCollection}
                  onChange={(e) => setPrivacySettings(prev => ({ ...prev, dataCollection: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemText primary="Analytics Tracking" secondary="Help us improve the app with usage analytics" />
              <ListItemSecondaryAction>
                <Switch
                  checked={privacySettings.analyticsTracking}
                  onChange={(e) => setPrivacySettings(prev => ({ ...prev, analyticsTracking: e.target.checked }))}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      title: 'Account',
      icon: <EditIcon />,
      content: (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6">Account Information</Typography>
            <Button
              startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
              variant={isEditing ? "contained" : "outlined"}
              onClick={isEditing ? handleSaveSettings : () => setIsEditing(true)}
            >
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </Box>

          <Box sx={{ display: 'grid', gap: 2, mb: 3 }}>
            <TextField
              label="Username"
              value={accountSettings.username}
              onChange={(e) => setAccountSettings(prev => ({ ...prev, username: e.target.value }))}
              disabled={!isEditing}
              fullWidth
            />
            <TextField
              label="Email"
              value={accountSettings.email}
              onChange={(e) => setAccountSettings(prev => ({ ...prev, email: e.target.value }))}
              disabled={!isEditing}
              fullWidth
            />
            <TextField
              label="Phone"
              value={accountSettings.phone}
              onChange={(e) => setAccountSettings(prev => ({ ...prev, phone: e.target.value }))}
              disabled={!isEditing}
              fullWidth
            />
          </Box>

          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                value={accountSettings.language}
                onChange={(e) => {
                  const newLang = e.target.value;
                  setAccountSettings(prev => ({ ...prev, language: newLang }));
                  setLanguage(newLang);
                }}
                disabled={!isEditing}
                label="Language"
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="es">Spanish</MenuItem>
                <MenuItem value="fr">French</MenuItem>
                <MenuItem value="de">German</MenuItem>
                <MenuItem value="zh">Chinese</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Units</InputLabel>
              <Select
                value={accountSettings.units}
                onChange={(e) => setAccountSettings(prev => ({ ...prev, units: e.target.value as any }))}
                disabled={!isEditing}
                label="Units"
              >
                <MenuItem value="metric">Metric (kg, cm)</MenuItem>
                <MenuItem value="imperial">Imperial (lbs, ft)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      )
    },
    {
      title: 'Data & Storage',
      icon: <BackupIcon />,
      content: (
        <Box>
          <Typography variant="h6" gutterBottom>Data Management</Typography>
          
          <List>
            <ListItem>
              <ListItemIcon><DownloadIcon /></ListItemIcon>
              <ListItemText 
                primary="Export Data" 
                secondary="Download your fitness data and settings" 
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" onClick={handleExportData}>
                  Export
                </Button>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon><BackupIcon /></ListItemIcon>
              <ListItemText 
                primary="Backup Settings" 
                secondary="Create a backup of your app settings" 
              />
              <ListItemSecondaryAction>
                <Button variant="outlined">
                  Backup
                </Button>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon><DeleteIcon sx={{ color: 'error.main' }} /></ListItemIcon>
              <ListItemText 
                primary="Clear Cache" 
                secondary="Free up space by clearing temporary data" 
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="error">
                  Clear
                </Button>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem>
              <ListItemIcon><DeleteIcon sx={{ color: 'error.main' }} /></ListItemIcon>
              <ListItemText 
                primary="Delete Account" 
                secondary="Permanently delete your account and all data" 
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      )
    }
  ];

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>
          Settings
        </Typography>

        <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', lg: '300px 1fr' } }}>
          {/* Settings Navigation */}
          <Card sx={{ height: 'fit-content' }}>
            <List>
              {settingsSections.map((section, index) => (
                <ListItem
                  key={index}
                  component="div"
                  onClick={() => setActiveTab(index)}
                  sx={{
                    borderRadius: 1,
                    mx: 1,
                    mb: 0.5,
                    cursor: 'pointer',
                    backgroundColor: activeTab === index ? 'primary.main' : 'transparent',
                    color: activeTab === index ? 'primary.contrastText' : 'text.primary',
                    '&:hover': {
                      backgroundColor: activeTab === index ? 'primary.dark' : 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: activeTab === index ? 'inherit' : 'text.secondary' }}>
                    {section.icon}
                  </ListItemIcon>
                  <ListItemText primary={section.title} />
                </ListItem>
              ))}
            </List>
          </Card>

          {/* Settings Content */}
          <Card>
            <CardContent sx={{ p: 4 }}>
              {settingsSections[activeTab]?.content}
              
              <Divider sx={{ my: 4 }} />
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button variant="outlined" onClick={handleResetSettings}>
                  Reset to Default
                </Button>
                <Button variant="contained" onClick={handleSaveSettings}>
                  Save Changes
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Success Snackbar */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
            {snackbarMessage}
          </Alert>
        </Snackbar>

        {/* Confirmation Dialog */}
        <Dialog open={confirmDialog.open} onClose={() => setConfirmDialog(prev => ({ ...prev, open: false }))}>
          <DialogTitle>{confirmDialog.title}</DialogTitle>
          <DialogContent>
            <Typography>{confirmDialog.message}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmDialog(prev => ({ ...prev, open: false }))}>
              Cancel
            </Button>
            <Button 
              onClick={() => {
                confirmDialog.action();
                setConfirmDialog(prev => ({ ...prev, open: false }));
              }}
              color="error"
              variant="contained"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </MainLayout>
  );
};

export default SettingsPage;
