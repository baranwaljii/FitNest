// User related types
export enum UserRole {
  USER = 'user',
  COACH = 'coach',
  ADMIN = 'admin',
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  age?: number;
  weight?: number;
  height?: number;
  goal?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Authentication related types
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Workout related types
export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  duration: string;
}

export interface Workout {
  _id: string;
  userId: string;
  date: Date;
  exercises: Exercise[];
}

// Meal related types
export interface Meal {
  _id: string;
  userId: string;
  mealType: string;
  foodItems: string[];
  calories: number;
  date: Date;
}

// Appointment related types
export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELED = 'canceled',
  COMPLETED = 'completed',
}

export interface Appointment {
  _id: string;
  userId: string;
  coachId: string;
  date: Date;
  time: string;
  link: string;
  status: AppointmentStatus;
}

// Notification types
export interface Notification {
  _id: string;
  userId: string;
  message: string;
  type: string;
  isRead: boolean;
  createdAt: Date;
}

// Theme types
export interface ThemeMode {
  darkMode: boolean;
  largeFonts: boolean;
  language: string;
}
