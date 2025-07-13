import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Chip,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Fab
} from '@mui/material';
import {
  FitnessCenter as WorkoutIcon,
  Timer as TimerIcon,
  Add as AddIcon,
  PlayArrow as PlayIcon,
  Stop as StopIcon
} from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
  completed: boolean;
}

interface Workout {
  id: string;
  name: string;
  category: string;
  duration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  exercises: Exercise[];
  completed: boolean;
  date?: Date;
}

const WorkoutsPage: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: '1',
      name: 'Full Body Strength',
      category: 'Strength Training',
      duration: 45,
      difficulty: 'Intermediate',
      completed: false,
      exercises: [
        { id: '1a', name: 'Push-ups', sets: 3, reps: 15, completed: false },
        { id: '1b', name: 'Squats', sets: 3, reps: 20, completed: false },
        { id: '1c', name: 'Plank', sets: 3, reps: 1, duration: 60, completed: false },
        { id: '1d', name: 'Deadlifts', sets: 3, reps: 12, weight: 135, completed: false }
      ]
    },
    {
      id: '2',
      name: 'Cardio Blast',
      category: 'Cardio',
      duration: 30,
      difficulty: 'Beginner',
      completed: true,
      date: new Date(),
      exercises: [
        { id: '2a', name: 'Jumping Jacks', sets: 3, reps: 30, completed: true },
        { id: '2b', name: 'High Knees', sets: 3, reps: 20, completed: true },
        { id: '2c', name: 'Burpees', sets: 2, reps: 10, completed: true },
        { id: '2d', name: 'Mountain Climbers', sets: 3, reps: 25, completed: true }
      ]
    },
    {
      id: '3',
      name: 'Upper Body Focus',
      category: 'Strength Training',
      duration: 40,
      difficulty: 'Advanced',
      completed: false,
      exercises: [
        { id: '3a', name: 'Pull-ups', sets: 4, reps: 8, completed: false },
        { id: '3b', name: 'Bench Press', sets: 4, reps: 10, weight: 185, completed: false },
        { id: '3c', name: 'Shoulder Press', sets: 3, reps: 12, weight: 95, completed: false },
        { id: '3d', name: 'Bicep Curls', sets: 3, reps: 15, weight: 35, completed: false }
      ]
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [workoutInProgress, setWorkoutInProgress] = useState<string | null>(null);

  const handleStartWorkout = (workoutId: string) => {
    setWorkoutInProgress(workoutId);
  };

  const handleCompleteWorkout = (workoutId: string) => {
    setWorkouts(prev => prev.map(w => 
      w.id === workoutId 
        ? { ...w, completed: true, date: new Date() }
        : w
    ));
    setWorkoutInProgress(null);
  };

  const handleCompleteExercise = (workoutId: string, exerciseId: string) => {
    setWorkouts(prev => prev.map(w => 
      w.id === workoutId 
        ? {
            ...w,
            exercises: w.exercises.map(e => 
              e.id === exerciseId ? { ...e, completed: !e.completed } : e
            )
          }
        : w
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'error';
      default: return 'default';
    }
  };

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          My Workouts
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your fitness journey with personalized workout plans
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
        gap: 3 
      }}>
        {workouts.map((workout) => (
          <Card key={workout.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: workout.completed ? 'success.main' : 'primary.main' }}>
                    <WorkoutIcon />
                  </Avatar>
                }
                title={workout.name}
                subheader={workout.category}
                action={
                  <Chip 
                    label={workout.difficulty} 
                    color={getDifficultyColor(workout.difficulty) as any}
                    size="small"
                  />
                }
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <TimerIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                    {workout.duration} minutes • {workout.exercises.length} exercises
                  </Typography>
                </Box>

                <List dense>
                  {workout.exercises.slice(0, 3).map((exercise) => (
                    <ListItem key={exercise.id} sx={{ px: 0 }}>
                      <ListItemText
                        primary={exercise.name}
                        secondary={
                          exercise.duration 
                            ? `${exercise.sets} sets × ${exercise.duration}s`
                            : `${exercise.sets} sets × ${exercise.reps} reps${exercise.weight ? ` @ ${exercise.weight}lbs` : ''}`
                        }
                      />
                      {workout.id === workoutInProgress && (
                        <ListItemSecondaryAction>
                          <IconButton
                            size="small"
                            color={exercise.completed ? 'success' : 'default'}
                            onClick={() => handleCompleteExercise(workout.id, exercise.id)}
                          >
                            ✓
                          </IconButton>
                        </ListItemSecondaryAction>
                      )}
                    </ListItem>
                  ))}
                  {workout.exercises.length > 3 && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        secondary={`+${workout.exercises.length - 3} more exercises`}
                      />
                    </ListItem>
                  )}
                </List>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                {workout.completed ? (
                  <Button
                    fullWidth
                    variant="outlined"
                    color="success"
                    startIcon={<WorkoutIcon />}
                  >
                    Completed {workout.date && new Date(workout.date).toLocaleDateString()}
                  </Button>
                ) : workoutInProgress === workout.id ? (
                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    startIcon={<StopIcon />}
                    onClick={() => handleCompleteWorkout(workout.id)}
                  >
                    Complete Workout
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<PlayIcon />}
                    onClick={() => handleStartWorkout(workout.id)}
                  >
                    Start Workout
                  </Button>
                )}
              </Box>
            </Card>
        ))}
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add workout"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon />
      </Fab>

      {/* Add Workout Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Workout</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="Workout Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              select
              label="Category"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="Strength Training">Strength Training</MenuItem>
              <MenuItem value="Cardio">Cardio</MenuItem>
              <MenuItem value="Flexibility">Flexibility</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
            </TextField>
            <TextField
              fullWidth
              select
              label="Difficulty"
              variant="outlined"
              sx={{ mb: 2 }}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </TextField>
            <TextField
              fullWidth
              type="number"
              label="Duration (minutes)"
              variant="outlined"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            Create Workout
          </Button>
        </DialogActions>
      </Dialog>
    </MainLayout>
  );
};

export default WorkoutsPage;
