import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Button,
  Grid,
  TextField,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  FitnessCenter as FitnessCenterIcon,
  Favorite as HeartIcon,
  Speed as SpeedIcon,
  PhotoCamera as CameraIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import MainLayout from '../components/layout/MainLayout';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  phone: string;
  fullName: string;
  bio: string;
  location: string;
  joinDate: string;
  avatar: string;
  age: number;
  height: number;
  weight: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
}

interface ActivityStats {
  totalWorkouts: number;
  totalCaloriesBurned: number;
  averageWorkoutDuration: number;
  currentStreak: number;
  longestStreak: number;
  favoriteExercise: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned: string;
  category: 'workout' | 'nutrition' | 'consistency' | 'milestone';
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);

  const [profile, setProfile] = useState<UserProfile>({
    id: '1',
    username: 'fitnessuser',
    email: 'user@example.com',
    phone: '+1234567890',
    fullName: 'John Fitness',
    bio: 'Passionate about fitness and healthy living. Always striving to be better than yesterday!',
    location: 'New York, NY',
    joinDate: '2024-01-15',
    avatar: '',
    age: 28,
    height: 175, // cm
    weight: 70, // kg
    fitnessLevel: 'intermediate',
    goals: ['Weight Loss', 'Muscle Gain', 'Endurance'],
  });

  const [stats] = useState<ActivityStats>({
    totalWorkouts: 156,
    totalCaloriesBurned: 45280,
    averageWorkoutDuration: 52, // minutes
    currentStreak: 12,
    longestStreak: 28,
    favoriteExercise: 'Push-ups',
  });

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'First Workout',
      description: 'Completed your first workout session',
      icon: '🎯',
      dateEarned: '2024-01-16',
      category: 'milestone',
    },
    {
      id: '2',
      title: '7-Day Streak',
      description: 'Maintained a 7-day workout streak',
      icon: '🔥',
      dateEarned: '2024-01-23',
      category: 'consistency',
    },
    {
      id: '3',
      title: '100 Workouts',
      description: 'Completed 100 workout sessions',
      icon: '💯',
      dateEarned: '2024-06-15',
      category: 'workout',
    },
    {
      id: '4',
      title: 'Calorie Crusher',
      description: 'Burned over 1000 calories in a single workout',
      icon: '⚡',
      dateEarned: '2024-05-20',
      category: 'workout',
    },
    {
      id: '5',
      title: 'Consistency Champion',
      description: 'Maintained a 30-day workout streak',
      icon: '👑',
      dateEarned: '2024-07-01',
      category: 'consistency',
    },
  ]);

  const handleSaveProfile = () => {
    // Simulate saving profile
    setTimeout(() => {
      setSnackbarMessage('Profile updated successfully!');
      setSnackbarOpen(true);
      setIsEditing(false);
    }, 500);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset any unsaved changes here if needed
  };

  const handleAvatarUpload = () => {
    // Simulate avatar upload
    setSnackbarMessage('Avatar updated successfully!');
    setSnackbarOpen(true);
    setAvatarDialogOpen(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getBMI = () => {
    const heightInMeters = profile.height / 100;
    return (profile.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { text: 'Underweight', color: 'info' };
    if (bmi < 25) return { text: 'Normal', color: 'success' };
    if (bmi < 30) return { text: 'Overweight', color: 'warning' };
    return { text: 'Obese', color: 'error' };
  };

  const bmi = parseFloat(getBMI());
  const bmiCategory = getBMICategory(bmi);

  const tabContent = [
    // Overview Tab
    <Box key="overview">
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', mb: 3 }}>
        {/* Stats Cards */}
        <Card sx={{ flex: 1, minWidth: 300 }}>
          <CardHeader title="Activity Stats" />
          <CardContent>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <Box textAlign="center">
                <Typography variant="h4" color="primary">{stats.totalWorkouts}</Typography>
                <Typography variant="body2" color="textSecondary">Total Workouts</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" color="primary">{stats.totalCaloriesBurned.toLocaleString()}</Typography>
                <Typography variant="body2" color="textSecondary">Calories Burned</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" color="primary">{stats.currentStreak}</Typography>
                <Typography variant="body2" color="textSecondary">Current Streak</Typography>
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" color="primary">{stats.averageWorkoutDuration}min</Typography>
                <Typography variant="body2" color="textSecondary">Avg Duration</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card sx={{ flex: 1, minWidth: 300 }}>
          <CardHeader title="Health Metrics" />
          <CardContent>
            <Box mb={2}>
              <Typography variant="body2" color="textSecondary">BMI</Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h5">{getBMI()}</Typography>
                <Chip 
                  label={bmiCategory.text} 
                  color={bmiCategory.color as any} 
                  size="small" 
                />
              </Box>
            </Box>
            <Box mb={2}>
              <Typography variant="body2" color="textSecondary">Weight</Typography>
              <Typography variant="h6">{profile.weight} kg</Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body2" color="textSecondary">Height</Typography>
              <Typography variant="h6">{profile.height} cm</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">Fitness Level</Typography>
              <Chip 
                label={profile.fitnessLevel.charAt(0).toUpperCase() + profile.fitnessLevel.slice(1)} 
                color="primary" 
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Goals */}
      <Card>
        <CardHeader title="Fitness Goals" />
        <CardContent>
          <Box display="flex" gap={1} flexWrap="wrap">
            {profile.goals.map((goal, index) => (
              <Chip key={index} label={goal} color="primary" variant="outlined" />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>,

    // Achievements Tab
    <Box key="achievements">
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {achievements.map((achievement) => (
          <Card key={achievement.id} sx={{ height: '100%' }}>
            <CardContent sx={{ textAlign: 'center', py: 3 }}>
              <Typography variant="h3" sx={{ mb: 1 }}>{achievement.icon}</Typography>
              <Typography variant="h6" gutterBottom>{achievement.title}</Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                {achievement.description}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Earned on {formatDate(achievement.dateEarned)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>,

    // Activity Tab
    <Box key="activity">
      <Card>
        <CardHeader title="Recent Activity" />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon><FitnessCenterIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Upper Body Strength Training"
                secondary="Today • 45 minutes • 320 calories burned"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><HeartIcon color="secondary" /></ListItemIcon>
              <ListItemText 
                primary="Cardio Blast"
                secondary="Yesterday • 30 minutes • 280 calories burned"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><SpeedIcon color="info" /></ListItemIcon>
              <ListItemText 
                primary="HIIT Workout"
                secondary="2 days ago • 25 minutes • 350 calories burned"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><FitnessCenterIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Leg Day"
                secondary="3 days ago • 50 minutes • 400 calories burned"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>,
  ];

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Profile Header */}
        <Card sx={{ mb: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={3}>
              {/* Avatar */}
              <Box position="relative">
                <Avatar
                  sx={{ 
                    width: 120, 
                    height: 120,
                    bgcolor: 'primary.main',
                    fontSize: '3rem',
                  }}
                  src={profile.avatar}
                >
                  {profile.fullName.charAt(0)}
                </Avatar>
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'divider',
                  }}
                  size="small"
                  onClick={() => setAvatarDialogOpen(true)}
                >
                  <CameraIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Profile Info */}
              <Box flex={1}>
                {isEditing ? (
                  <Box sx={{ display: 'grid', gap: 2 }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        value={profile.fullName}
                        onChange={(e) => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
                      />
                      <TextField
                        fullWidth
                        label="Username"
                        value={profile.username}
                        onChange={(e) => setProfile(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label="Bio"
                      multiline
                      rows={2}
                      value={profile.bio}
                      onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                    />
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                      <TextField
                        fullWidth
                        label="Location"
                        value={profile.location}
                        onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                      />
                      <FormControl fullWidth>
                        <InputLabel>Fitness Level</InputLabel>
                        <Select
                          value={profile.fitnessLevel}
                          onChange={(e) => setProfile(prev => ({ ...prev, fitnessLevel: e.target.value as any }))}
                          label="Fitness Level"
                        >
                          <MenuItem value="beginner">Beginner</MenuItem>
                          <MenuItem value="intermediate">Intermediate</MenuItem>
                          <MenuItem value="advanced">Advanced</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                ) : (
                  <>
                    <Typography variant="h4" gutterBottom>{profile.fullName}</Typography>
                    <Typography variant="h6" color="textSecondary" gutterBottom>@{profile.username}</Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>{profile.bio}</Typography>
                    <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <LocationIcon fontSize="small" color="action" />
                        <Typography variant="body2">{profile.location}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <CalendarIcon fontSize="small" color="action" />
                        <Typography variant="body2">Joined {formatDate(profile.joinDate)}</Typography>
                      </Box>
                    </Box>
                  </>
                )}
              </Box>

              {/* Action Buttons */}
              <Box display="flex" gap={1} flexDirection={{ xs: 'row', md: 'column' }}>
                {isEditing ? (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={handleSaveProfile}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<EditIcon />}
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<ShareIcon />}
                    >
                      Share
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Card>
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Overview" />
            <Tab label="Achievements" />
            <Tab label="Activity" />
          </Tabs>
          <CardContent sx={{ p: 3 }}>
            {tabContent[activeTab]}
          </CardContent>
        </Card>

        {/* Avatar Upload Dialog */}
        <Dialog open={avatarDialogOpen} onClose={() => setAvatarDialogOpen(false)}>
          <DialogTitle>Update Profile Picture</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Choose a new profile picture to represent yourself.
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<CameraIcon />}
              sx={{ mb: 2 }}
            >
              Upload from Device
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleAvatarUpload}
            >
              Use Default Avatar
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAvatarDialogOpen(false)}>Cancel</Button>
          </DialogActions>
        </Dialog>

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
      </Container>
    </MainLayout>
  );
};

export default ProfilePage;
