import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Card, 
  CardContent,
  CardHeader,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress,
  IconButton
} from '@mui/material';
import {
  FitnessCenter as WorkoutIcon,
  DirectionsRun as RunningIcon,
  LocalFireDepartment as CalorieIcon,
  WaterDrop as WaterIcon,
  Hotel as SleepIcon,
  Add as AddIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';
import { useAuth } from '../../context/AuthContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Mock data for the dashboard
  const workoutData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [15, 5],
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const calorieData = {
    labels: ['Consumed', 'Remaining'],
    datasets: [
      {
        data: [1800, 400],
        backgroundColor: ['#ff9800', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const weeklyActivityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Burned',
        data: [400, 300, 600, 800, 500, 700, 350],
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back, {user?.name || 'User'}! Here's your fitness summary.
        </Typography>
      </Box>
      
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, 
          gap: 3 
        }}>
          {/* Left Column - Summary cards and charts */}
          <Box>
            {/* Summary Cards */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
              gap: 3,
              mb: 3
            }}>
              {/* Workouts Summary */}
              <Card>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      <WorkoutIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">Workouts</Typography>
                      <Typography variant="body2" color="text.secondary">This week</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ width: 60, height: 60 }}>
                      <Doughnut key="workout-doughnut" data={workoutData} options={chartOptions} />
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h4" fontWeight="bold">15</Typography>
                      <Typography variant="body2" color="text.secondary">of 20 completed</Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Log Workout
                  </Button>
                </CardContent>
              </Card>

              {/* Calories Summary */}
              <Card>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'warning.main', mr: 2 }}>
                      <CalorieIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">Calories</Typography>
                      <Typography variant="body2" color="text.secondary">Today</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ width: 60, height: 60 }}>
                      <Doughnut key="calorie-doughnut" data={calorieData} options={chartOptions} />
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="h4" fontWeight="bold">1,800</Typography>
                      <Typography variant="body2" color="text.secondary">of 2,200 kcal</Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Log Meal
                  </Button>
                </CardContent>
              </Card>

              {/* Water Tracking */}
              <Card>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'info.main', mr: 2 }}>
                      <WaterIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">Water</Typography>
                      <Typography variant="body2" color="text.secondary">Today</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" fontWeight="bold">6 / 8</Typography>
                    <Typography variant="body2" color="text.secondary">glasses</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={75} 
                    sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddIcon />}
                    fullWidth
                  >
                    Add Water
                  </Button>
                </CardContent>
              </Card>

              {/* Sleep Tracking */}
              <Card>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                      <SleepIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight="bold">Sleep</Typography>
                      <Typography variant="body2" color="text.secondary">Last night</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h4" fontWeight="bold">7.5h</Typography>
                    <Typography variant="body2" color="text.secondary">of 8h goal</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={94} 
                    sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddIcon />}
                    fullWidth
                  >
                    Log Sleep
                  </Button>
                </CardContent>
              </Card>
            </Box>

            {/* Weekly Activity Chart */}
            <Card>
              <CardHeader
                title="Weekly Activity"
                subheader="Calories burned over the last 7 days"
              />
              <CardContent>
                <Box sx={{ height: 300 }}>
                  <Line key="weekly-activity-line" data={weeklyActivityData} options={lineChartOptions} />
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Right Column - User profile and goals */}
          <Box>
            <Card sx={{ height: 'fit-content' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </Avatar>
                }
                title={user?.name || 'User Name'}
                subheader={`${user?.role || 'Member'} since ${new Date().getFullYear()}`}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Current Goals
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <WorkoutIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Workout 5x per week"
                      secondary="Progress: 3/5 this week"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CalorieIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Maintain 2,200 kcal/day"
                      secondary="Average: 2,150 kcal"
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <WaterIcon color="info" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Drink 8 glasses daily"
                      secondary="Today: 6/8 glasses"
                    />
                  </ListItem>
                </List>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="h6" gutterBottom>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button 
                    variant="outlined" 
                    endIcon={<ChevronRightIcon />}
                    fullWidth
                    sx={{ justifyContent: 'space-between' }}
                  >
                    Start Workout
                  </Button>
                  <Button 
                    variant="outlined" 
                    endIcon={<ChevronRightIcon />}
                    fullWidth
                    sx={{ justifyContent: 'space-between' }}
                  >
                    Log Meal
                  </Button>
                  <Button 
                    variant="outlined" 
                    endIcon={<ChevronRightIcon />}
                    fullWidth
                    sx={{ justifyContent: 'space-between' }}
                  >
                    View Progress
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </MainLayout>
  );
};

export default UserDashboard;
