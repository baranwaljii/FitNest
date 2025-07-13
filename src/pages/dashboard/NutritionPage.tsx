import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Avatar,
  LinearProgress,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Chip
} from '@mui/material';
import {
  Restaurant as FoodIcon,
  Add as AddIcon,
  LocalFireDepartment as CalorieIcon,
  Delete as DeleteIcon,
  Apple as AppleIcon,
  Egg as ProteinIcon,
  Grain as CarbIcon
} from '@mui/icons-material';
import MainLayout from '../../components/layout/MainLayout';

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity: number;
  unit: string;
  meal: 'breakfast' | 'lunch' | 'dinner' | 'snack';
}

interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const NutritionPage: React.FC = () => {
  const [goals] = useState<NutritionGoals>({
    calories: 2200,
    protein: 150,
    carbs: 275,
    fat: 73
  });

  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: '1',
      name: 'Grilled Chicken Breast',
      calories: 231,
      protein: 43.5,
      carbs: 0,
      fat: 5,
      quantity: 1,
      unit: 'piece',
      meal: 'lunch'
    },
    {
      id: '2',
      name: 'Brown Rice',
      calories: 216,
      protein: 5,
      carbs: 45,
      fat: 1.8,
      quantity: 1,
      unit: 'cup',
      meal: 'lunch'
    },
    {
      id: '3',
      name: 'Greek Yogurt',
      calories: 130,
      protein: 20,
      carbs: 9,
      fat: 0,
      quantity: 1,
      unit: 'cup',
      meal: 'breakfast'
    },
    {
      id: '4',
      name: 'Banana',
      calories: 105,
      protein: 1.3,
      carbs: 27,
      fat: 0.4,
      quantity: 1,
      unit: 'medium',
      meal: 'breakfast'
    },
    {
      id: '5',
      name: 'Almonds',
      calories: 161,
      protein: 6,
      carbs: 6,
      fat: 14,
      quantity: 28,
      unit: 'grams',
      meal: 'snack'
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    quantity: 1,
    unit: 'grams',
    meal: 'breakfast'
  });

  const totals = foodItems.reduce((acc, item) => ({
    calories: acc.calories + item.calories,
    protein: acc.protein + item.protein,
    carbs: acc.carbs + item.carbs,
    fat: acc.fat + item.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const handleAddFood = () => {
    const foodItem: FoodItem = {
      id: Date.now().toString(),
      ...newFood,
      meal: newFood.meal as any
    };
    setFoodItems([...foodItems, foodItem]);
    setNewFood({
      name: '',
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      quantity: 1,
      unit: 'grams',
      meal: 'breakfast'
    });
    setOpenDialog(false);
  };

  const handleDeleteFood = (id: string) => {
    setFoodItems(foodItems.filter(item => item.id !== id));
  };

  const getMealIcon = (meal: string) => {
    switch (meal) {
      case 'breakfast': return '🌅';
      case 'lunch': return '☀️';
      case 'dinner': return '🌙';
      case 'snack': return '🍎';
      default: return '🍽️';
    }
  };

  const getMealItems = (meal: string) => 
    foodItems.filter(item => item.meal === meal);

  const renderMacroCard = (
    title: string, 
    current: number, 
    goal: number, 
    unit: string, 
    color: string,
    icon: React.ReactElement
  ) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: color, mr: 2 }}>
            {icon}
          </Avatar>
          <Box>
            <Typography variant="h6" fontWeight="bold">{title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {Math.round(current)}/{goal}{unit}
            </Typography>
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={Math.min((current / goal) * 100, 100)}
          sx={{ 
            height: 8, 
            borderRadius: 4,
            '& .MuiLinearProgress-bar': { backgroundColor: color }
          }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {Math.round(((current / goal) * 100))}% of daily goal
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Nutrition Tracker
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your daily nutrition and reach your health goals
        </Typography>
      </Box>

      {/* Daily Overview */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
        gap: 3,
        mb: 4
      }}>
        {renderMacroCard('Calories', totals.calories, goals.calories, 'kcal', '#ff9800', <CalorieIcon />)}
        {renderMacroCard('Protein', totals.protein, goals.protein, 'g', '#4caf50', <ProteinIcon />)}
        {renderMacroCard('Carbs', totals.carbs, goals.carbs, 'g', '#2196f3', <CarbIcon />)}
        {renderMacroCard('Fat', totals.fat, goals.fat, 'g', '#9c27b0', <AppleIcon />)}
      </Box>

      {/* Meal Sections */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
        gap: 3,
        mb: 4
      }}>
        {['breakfast', 'lunch', 'dinner', 'snack'].map((meal) => (
          <Card key={meal}>
            <CardHeader
              title={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ mr: 1 }}>
                    {getMealIcon(meal)} {meal.charAt(0).toUpperCase() + meal.slice(1)}
                  </Typography>
                  <Chip 
                    label={`${getMealItems(meal).reduce((sum, item) => sum + item.calories, 0)} kcal`}
                    size="small"
                    color="primary"
                  />
                </Box>
              }
            />
            <CardContent>
              {getMealItems(meal).length === 0 ? (
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  No food logged for this meal
                </Typography>
              ) : (
                <List dense>
                  {getMealItems(meal).map((item) => (
                    <ListItem key={item.id} sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          <FoodIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={
                          <Box>
                            <Typography variant="body2">
                              {item.quantity} {item.unit} • {item.calories} kcal
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              P: {item.protein}g | C: {item.carbs}g | F: {item.fat}g
                            </Typography>
                          </Box>
                        }
                      />
                      <IconButton
                        size="small"
                        onClick={() => handleDeleteFood(item.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Quick Add Suggestions */}
      <Card sx={{ mb: 4 }}>
        <CardHeader title="Quick Add Common Foods" />
        <CardContent>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {[
              { name: 'Apple', calories: 95 },
              { name: 'Banana', calories: 105 },
              { name: 'Oatmeal', calories: 158 },
              { name: 'Egg', calories: 70 },
              { name: 'Chicken Breast', calories: 231 },
              { name: 'Broccoli', calories: 55 }
            ].map((food) => (
              <Chip
                key={food.name}
                label={`${food.name} (${food.calories} kcal)`}
                onClick={() => {
                  const quickFood: FoodItem = {
                    id: Date.now().toString(),
                    name: food.name,
                    calories: food.calories,
                    protein: food.calories * 0.1, // Rough estimate
                    carbs: food.calories * 0.5,
                    fat: food.calories * 0.05,
                    quantity: 1,
                    unit: 'serving',
                    meal: 'snack'
                  };
                  setFoodItems([...foodItems, quickFood]);
                }}
                variant="outlined"
                clickable
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add food"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon />
      </Fab>

      {/* Add Food Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Food Item</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="Food Name"
              value={newFood.name}
              onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
              sx={{ mb: 2 }}
            />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
              <TextField
                type="number"
                label="Quantity"
                value={newFood.quantity}
                onChange={(e) => setNewFood({ ...newFood, quantity: Number(e.target.value) })}
              />
              <TextField
                select
                label="Unit"
                value={newFood.unit}
                onChange={(e) => setNewFood({ ...newFood, unit: e.target.value })}
              >
                <MenuItem value="grams">Grams</MenuItem>
                <MenuItem value="cup">Cup</MenuItem>
                <MenuItem value="piece">Piece</MenuItem>
                <MenuItem value="serving">Serving</MenuItem>
                <MenuItem value="tablespoon">Tablespoon</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, mb: 2 }}>
              <TextField
                type="number"
                label="Calories"
                value={newFood.calories}
                onChange={(e) => setNewFood({ ...newFood, calories: Number(e.target.value) })}
              />
              <TextField
                type="number"
                label="Protein (g)"
                value={newFood.protein}
                onChange={(e) => setNewFood({ ...newFood, protein: Number(e.target.value) })}
              />
              <TextField
                type="number"
                label="Carbs (g)"
                value={newFood.carbs}
                onChange={(e) => setNewFood({ ...newFood, carbs: Number(e.target.value) })}
              />
              <TextField
                type="number"
                label="Fat (g)"
                value={newFood.fat}
                onChange={(e) => setNewFood({ ...newFood, fat: Number(e.target.value) })}
              />
            </Box>
            <TextField
              fullWidth
              select
              label="Meal"
              value={newFood.meal}
              onChange={(e) => setNewFood({ ...newFood, meal: e.target.value })}
            >
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
              <MenuItem value="snack">Snack</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleAddFood}
            disabled={!newFood.name || newFood.calories === 0}
          >
            Add Food
          </Button>
        </DialogActions>
      </Dialog>
    </MainLayout>
  );
};

export default NutritionPage;
