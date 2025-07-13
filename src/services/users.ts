import api from './api';
import { User, UserRole } from '../types';

// User services
export const UserService = {
  // Get current user profile
  getCurrentUser: async () => {
    const response = await api.get('/users/me');
    return response.data;
  },

  // Update user profile
  updateProfile: async (userData: Partial<User>) => {
    const response = await api.put('/users/me', userData);
    return response.data;
  },

  // Update user metrics (weight, height, etc.)
  updateMetrics: async (metrics: { weight?: number; height?: number; age?: number; goal?: string }) => {
    const response = await api.put('/users/me/metrics', metrics);
    return response.data;
  },

  // Get all users (for admin)
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // Get users by role (for admin/coach)
  getUsersByRole: async (role: UserRole) => {
    const response = await api.get(`/users/role/${role}`);
    return response.data;
  },

  // Get user by ID
  getUserById: async (id: string) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Update user role (for admin)
  updateUserRole: async (userId: string, role: UserRole) => {
    const response = await api.put(`/users/${userId}/role`, { role });
    return response.data;
  },

  // Delete user (for admin)
  deleteUser: async (userId: string) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  },
};

// Coach services
export const CoachService = {
  // Get all coaches
  getAllCoaches: async () => {
    const response = await api.get('/coaches');
    return response.data;
  },

  // Get coach details
  getCoachDetails: async (coachId: string) => {
    const response = await api.get(`/coaches/${coachId}`);
    return response.data;
  },

  // Get coach's assigned users
  getAssignedUsers: async () => {
    const response = await api.get('/coaches/users');
    return response.data;
  },

  // Assign user to coach
  assignUserToCoach: async (userId: string, coachId: string) => {
    const response = await api.post('/coaches/assign', { userId, coachId });
    return response.data;
  },

  // Create/update custom plan for user
  createCustomPlan: async (userId: string, planData: any) => {
    const response = await api.post(`/coaches/plans/${userId}`, planData);
    return response.data;
  },
};

// Admin services
export const AdminService = {
  // Dashboard statistics
  getDashboardStats: async () => {
    const response = await api.get('/admin/stats');
    return response.data;
  },

  // Coach approval
  approveCoach: async (userId: string) => {
    const response = await api.put(`/admin/coaches/${userId}/approve`);
    return response.data;
  },

  // Get system logs
  getSystemLogs: async () => {
    const response = await api.get('/admin/logs');
    return response.data;
  },
  
  // Content management
  getContentList: async () => {
    const response = await api.get('/admin/content');
    return response.data;
  },
  
  updateContent: async (contentId: string, contentData: any) => {
    const response = await api.put(`/admin/content/${contentId}`, contentData);
    return response.data;
  },
};
