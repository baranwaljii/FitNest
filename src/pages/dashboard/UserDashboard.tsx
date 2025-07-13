import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  FitnessCenter,
  Restaurant,
  Timeline,
  TrendingUp,
  CalendarToday,
  PlayArrow,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import MainLayout from '../../components/layout/MainLayout';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for dashboard
  const stats = {
    workoutsThisWeek: 4,
    totalWorkouts: 23,
    caloriesBurned: 1250,
    weeklyGoal: 5,
  };

  const recentWorkouts = [
    { name: 'Upper Body Strength', date: '2 days ago', duration: '45 min' },
    { name: 'Cardio HIIT', date: '3 days ago', duration: '30 min' },
    { name: 'Leg Day', date: '5 days ago', duration: '50 min' },
  ];

  return (
    <MainLayout>
      <Container maxWidth="lg">
        {/* Welcome Section */}
        <Box sx={{ 
          mb: 4, 
          p: 4, 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #6C5CE7 0%, #74B9FF 100%)',
          color: 'white',
          textAlign: 'center',
        }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome back, {user?.name}! 🎉
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 300 }}>
            Ready to crush your fitness goals today?
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
              color: 'white',
              borderRadius: 3,
              '&:hover': { transform: 'translateY(-4px)' },
              transition: 'all 0.3s ease',
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <FitnessCenter sx={{ fontSize: 40 }} />
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                    Workouts
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.workoutsThisWeek}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  This week
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={(stats.workoutsThisWeek / stats.weeklyGoal) * 100} 
                  sx={{ 
                    mt: 1, 
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#FFD93D'
                    }
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{
              background: 'linear-gradient(135deg, #00D2D3 0%, #55EFC4 100%)',
              color: 'white',
              borderRadius: 3,
              '&:hover': { transform: 'translateY(-4px)' },
              transition: 'all 0.3s ease',
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Timeline sx={{ fontSize: 40 }} />
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                    Total
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.totalWorkouts}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Workouts completed
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
              color: 'white',
              borderRadius: 3,
              '&:hover': { transform: 'translateY(-4px)' },
              transition: 'all 0.3s ease',
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUp sx={{ fontSize: 40 }} />
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                    Calories
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.caloriesBurned}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Burned this week
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{
              background: 'linear-gradient(135deg, #FFD93D 0%, #FFA726 100%)',
              color: 'white',
              borderRadius: 3,
              '&:hover': { transform: 'translateY(-4px)' },
              transition: 'all 0.3s ease',
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Restaurant sx={{ fontSize: 40 }} />
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 }}>
                    Nutrition
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>85%</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Goal completion
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    color="primary"
                  >
                    Start Workout
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Restaurant />}
                  >
                    Log Meal
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<CalendarToday />}
                  >
                    Schedule
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Today's Goal
                </Typography>
                <Box sx={{ textAlign: 'center', py: 2 }}>
                  <Typography variant="h4" color="primary">
                    30 min
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cardio workout
                  </Typography>
                  <Chip
                    label="In Progress"
                    color="warning"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity */}
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Workouts
            </Typography>
            {recentWorkouts.map((workout, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  py: 1,
                  borderBottom: index < recentWorkouts.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <FitnessCenter />
                </Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">{workout.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {workout.date} • {workout.duration}
                  </Typography>
                </Box>
                <Button size="small">View</Button>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Container>
    </MainLayout>
  );
};

export default UserDashboard;