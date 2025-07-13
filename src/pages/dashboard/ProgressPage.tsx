import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  LinearProgress,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  MonitorWeight as WeightIcon,
  FitnessCenter as StrengthIcon,
  DirectionsRun as CardioIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import MainLayout from '../../components/layout/MainLayout';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ProgressData {
  date: string;
  weight: number;
  bodyFat: number;
  muscle: number;
  workouts: number;
}

interface PersonalRecord {
  exercise: string;
  weight: number;
  reps: number;
  date: string;
  improvement: string;
}

const ProgressPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const progressData: ProgressData[] = [
    { date: '2025-01-01', weight: 180, bodyFat: 18, muscle: 147, workouts: 12 },
    { date: '2025-02-01', weight: 178, bodyFat: 17, muscle: 148, workouts: 16 },
    { date: '2025-03-01', weight: 176, bodyFat: 16, muscle: 148, workouts: 18 },
    { date: '2025-04-01', weight: 175, bodyFat: 15, muscle: 149, workouts: 20 },
    { date: '2025-05-01', weight: 174, bodyFat: 14.5, muscle: 150, workouts: 22 },
    { date: '2025-06-01', weight: 173, bodyFat: 14, muscle: 151, workouts: 24 },
    { date: '2025-07-01', weight: 172, bodyFat: 13.5, muscle: 152, workouts: 26 }
  ];

  const personalRecords: PersonalRecord[] = [
    { exercise: 'Bench Press', weight: 225, reps: 5, date: '2025-07-10', improvement: '+10 lbs' },
    { exercise: 'Squat', weight: 315, reps: 3, date: '2025-07-08', improvement: '+15 lbs' },
    { exercise: 'Deadlift', weight: 365, reps: 1, date: '2025-07-05', improvement: '+20 lbs' },
    { exercise: 'Pull-ups', weight: 0, reps: 15, date: '2025-07-03', improvement: '+3 reps' },
    { exercise: 'Push-ups', weight: 0, reps: 50, date: '2025-06-30', improvement: '+5 reps' }
  ];

  const currentStats = {
    weight: 172,
    bodyFat: 13.5,
    muscle: 152,
    weeklyWorkouts: 5,
    totalWorkouts: 156,
    streakDays: 14
  };

  const goals = {
    weight: 170,
    bodyFat: 12,
    muscle: 155,
    weeklyWorkouts: 6
  };

  const weightChartData = {
    labels: progressData.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short' })),
    datasets: [
      {
        label: 'Weight (lbs)',
        data: progressData.map(d => d.weight),
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Muscle Mass (lbs)',
        data: progressData.map(d => d.muscle),
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const workoutChartData = {
    labels: progressData.map(d => new Date(d.date).toLocaleDateString('en-US', { month: 'short' })),
    datasets: [
      {
        label: 'Monthly Workouts',
        data: progressData.map(d => d.workouts),
        backgroundColor: '#ff9800',
        borderColor: '#ff9800',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const getProgressPercentage = (current: number, goal: number, isReverse = false) => {
    if (isReverse) {
      // For weight loss or body fat reduction
      const start = Math.max(current, goal) * 1.1; // Assume starting point
      return Math.min(((start - current) / (start - goal)) * 100, 100);
    }
    return Math.min((current / goal) * 100, 100);
  };

  const renderStatsCard = (
    title: string,
    current: number,
    goal: number,
    unit: string,
    icon: React.ReactElement,
    color: string,
    isReverse = false
  ) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: color, mr: 2 }}>
            {icon}
          </Avatar>
          <Box>
            <Typography variant="h6" fontWeight="bold">{title}</Typography>
            <Typography variant="h4" fontWeight="bold" color={color}>
              {current}{unit}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Goal: {goal}{unit}
            </Typography>
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={getProgressPercentage(current, goal, isReverse)}
          sx={{ 
            height: 8, 
            borderRadius: 4,
            '& .MuiLinearProgress-bar': { backgroundColor: color }
          }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {Math.round(getProgressPercentage(current, goal, isReverse))}% to goal
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Progress Tracker
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Monitor your fitness journey and celebrate your achievements
        </Typography>
      </Box>

      {/* Current Stats */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
        gap: 3,
        mb: 4
      }}>
        {renderStatsCard('Weight', currentStats.weight, goals.weight, ' lbs', <WeightIcon />, '#1976d2', true)}
        {renderStatsCard('Body Fat', currentStats.bodyFat, goals.bodyFat, '%', <TrendingUpIcon />, '#f44336', true)}
        {renderStatsCard('Muscle Mass', currentStats.muscle, goals.muscle, ' lbs', <StrengthIcon />, '#4caf50')}
        {renderStatsCard('Weekly Workouts', currentStats.weeklyWorkouts, goals.weeklyWorkouts, '', <CardioIcon />, '#ff9800')}
      </Box>

      {/* Achievement Cards */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
        gap: 3,
        mb: 4
      }}>
        <Card sx={{ bgcolor: 'success.light', color: 'success.contrastText' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {currentStats.totalWorkouts}
            </Typography>
            <Typography variant="h6">Total Workouts</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ bgcolor: 'warning.light', color: 'warning.contrastText' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {currentStats.streakDays}
            </Typography>
            <Typography variant="h6">Day Streak</Typography>
          </CardContent>
        </Card>
        
        <Card sx={{ bgcolor: 'info.light', color: 'info.contrastText' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              -8
            </Typography>
            <Typography variant="h6">Pounds Lost</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Tabs for different progress views */}
      <Card>
        <CardHeader 
          title="Progress Charts"
          avatar={<TimelineIcon />}
        />
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
            <Tab label="Weight & Body Composition" />
            <Tab label="Workout Volume" />
            <Tab label="Personal Records" />
          </Tabs>
        </Box>
        
        <CardContent>
          {selectedTab === 0 && (
            <Box sx={{ height: 400 }}>
              <Line 
                key="weight-chart"
                data={weightChartData} 
                options={chartOptions} 
              />
            </Box>
          )}
          
          {selectedTab === 1 && (
            <Box sx={{ height: 400 }}>
              <Bar 
                key="workout-chart"
                data={workoutChartData} 
                options={chartOptions} 
              />
            </Box>
          )}
          
          {selectedTab === 2 && (
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Exercise</TableCell>
                    <TableCell align="right">Weight</TableCell>
                    <TableCell align="right">Reps</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Improvement</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {personalRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        <Typography fontWeight="medium">{record.exercise}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        {record.weight > 0 ? `${record.weight} lbs` : 'Bodyweight'}
                      </TableCell>
                      <TableCell align="right">{record.reps}</TableCell>
                      <TableCell align="right">
                        {new Date(record.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell align="right">
                        <Chip 
                          label={record.improvement} 
                          color="success" 
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>

      {/* Weekly Summary */}
      <Card sx={{ mt: 3 }}>
        <CardHeader title="This Week's Summary" />
        <CardContent>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
            gap: 3
          }}>
            <Box>
              <Typography variant="h6" gutterBottom>Achievements</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Chip label="🏆 New Bench Press PR!" color="success" />
                <Chip label="🔥 5 Workout Streak" color="warning" />
                <Chip label="💪 150g Protein Goal Met" color="info" />
                <Chip label="📉 Lost 0.5 lbs" color="primary" />
              </Box>
            </Box>
            
            <Box>
              <Typography variant="h6" gutterBottom>Next Week's Goals</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2">• Complete 6 workouts</Typography>
                <Typography variant="body2">• Try new squat variation</Typography>
                <Typography variant="body2">• Maintain 2200 calorie target</Typography>
                <Typography variant="body2">• Increase cardio to 150 minutes</Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default ProgressPage;
