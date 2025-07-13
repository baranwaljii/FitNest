import api from './api';

export const NotificationService = {
  // Get all notifications for current user
  getUserNotifications: async () => {
    const response = await api.get('/notifications');
    return response.data;
  },

  // Get unread notifications
  getUnreadNotifications: async () => {
    const response = await api.get('/notifications/unread');
    return response.data;
  },

  // Mark notification as read
  markAsRead: async (notificationId: string) => {
    const response = await api.put(`/notifications/${notificationId}/read`);
    return response.data;
  },

  // Mark all notifications as read
  markAllAsRead: async () => {
    const response = await api.put('/notifications/read-all');
    return response.data;
  },

  // Delete a notification
  deleteNotification: async (notificationId: string) => {
    const response = await api.delete(`/notifications/${notificationId}`);
    return response.data;
  },

  // Update notification settings
  updateSettings: async (settings: { 
    email: boolean; 
    push: boolean; 
    sms: boolean;
    workoutReminders: boolean;
    mealReminders: boolean;
    appointmentReminders: boolean;
  }) => {
    const response = await api.put('/notifications/settings', settings);
    return response.data;
  },
};
