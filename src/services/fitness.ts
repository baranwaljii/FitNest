import api from './api';

// Workout Services
export const WorkoutService = {
  // Get all workouts for current user
  getUserWorkouts: async (userId?: string) => {
    const url = userId ? `/workouts/user/${userId}` : '/workouts';
    const response = await api.get(url);
    return response.data;
  },

  // Get a single workout
  getWorkout: async (id: string) => {
    const response = await api.get(`/workouts/${id}`);
    return response.data;
  },

  // Create a new workout
  createWorkout: async (workoutData: any) => {
    const response = await api.post('/workouts', workoutData);
    return response.data;
  },

  // Update a workout
  updateWorkout: async (id: string, workoutData: any) => {
    const response = await api.put(`/workouts/${id}`, workoutData);
    return response.data;
  },

  // Delete a workout
  deleteWorkout: async (id: string) => {
    const response = await api.delete(`/workouts/${id}`);
    return response.data;
  },
};

// Meal Services
export const MealService = {
  // Get all meals for current user
  getUserMeals: async (userId?: string) => {
    const url = userId ? `/meals/user/${userId}` : '/meals';
    const response = await api.get(url);
    return response.data;
  },

  // Get meals by date
  getMealsByDate: async (date: string) => {
    const response = await api.get(`/meals/date/${date}`);
    return response.data;
  },

  // Create a new meal
  createMeal: async (mealData: any) => {
    const response = await api.post('/meals', mealData);
    return response.data;
  },

  // Update a meal
  updateMeal: async (id: string, mealData: any) => {
    const response = await api.put(`/meals/${id}`, mealData);
    return response.data;
  },

  // Delete a meal
  deleteMeal: async (id: string) => {
    const response = await api.delete(`/meals/${id}`);
    return response.data;
  },
};

// Water & Sleep Tracking Services
export const HealthMetricsService = {
  // Get water intake records
  getWaterIntake: async (date?: string) => {
    const url = date ? `/health/water?date=${date}` : '/health/water';
    const response = await api.get(url);
    return response.data;
  },

  // Log water intake
  logWaterIntake: async (data: { amount: number; date?: string }) => {
    const response = await api.post('/health/water', data);
    return response.data;
  },

  // Get sleep records
  getSleepRecords: async (date?: string) => {
    const url = date ? `/health/sleep?date=${date}` : '/health/sleep';
    const response = await api.get(url);
    return response.data;
  },

  // Log sleep
  logSleep: async (data: { hours: number; quality: string; date?: string }) => {
    const response = await api.post('/health/sleep', data);
    return response.data;
  },
};

// Appointment Services
export const AppointmentService = {
  // Get user appointments
  getUserAppointments: async () => {
    const response = await api.get('/appointments/user');
    return response.data;
  },

  // Get coach appointments
  getCoachAppointments: async () => {
    const response = await api.get('/appointments/coach');
    return response.data;
  },

  // Book an appointment
  bookAppointment: async (appointmentData: any) => {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  },

  // Update appointment status
  updateAppointmentStatus: async (id: string, status: string) => {
    const response = await api.put(`/appointments/${id}/status`, { status });
    return response.data;
  },

  // Cancel appointment
  cancelAppointment: async (id: string) => {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  },
};
