import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Public Pages
import LandingPageNew from '../pages/LandingPageNew';
import NotFoundPage from '../pages/NotFoundPage';
import FeaturesPage from '../pages/FeaturesPage';
import PricingPage from '../pages/PricingPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';

// Auth Pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';

// Dashboard Pages
import UserDashboard from '../pages/dashboard/UserDashboard';
import WorkoutsPage from '../pages/dashboard/WorkoutsPage';
import NutritionPage from '../pages/dashboard/NutritionPage';
import ProgressPage from '../pages/dashboard/ProgressPage';
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';

// Public Route component - redirects to dashboard if already logged in
interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  // Show loading indicator while checking auth
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // If user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  // Otherwise, show the public page
  return <>{children}</>;
};

// Protected Route component
const ProtectedRoute = ({ 
  allowedRoles = [],
  redirectPath = '/login'
}: { 
  allowedRoles?: string[];
  redirectPath?: string;
}) => {
  const { isAuthenticated, user, loading } = useAuth();
  
  // Show loading indicator while checking auth
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // Check if user is authenticated and has required role
  const hasAccess = isAuthenticated && (
    allowedRoles.length === 0 || // No specific role required
    (user && allowedRoles.includes(user.role))
  );
  
  return hasAccess ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

// Main Router
const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={
          <PublicRoute>
            <LandingPageNew />
          </PublicRoute>
        } />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />
        <Route path="/forgot-password" element={
          <PublicRoute>
            <ForgotPasswordPage />
          </PublicRoute>
        } />
        
        {/* Protected routes - User */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'coach', 'admin']} />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/meals" element={<NutritionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        
        {/* Protected routes - Coach */}
        <Route element={<ProtectedRoute allowedRoles={['coach', 'admin']} />}>
          <Route path="/coach/dashboard" element={<div>Coach Dashboard</div>} />
          <Route path="/coach/users" element={<div>Manage Users</div>} />
          <Route path="/coach/plans" element={<div>Workout Plans</div>} />
        </Route>
        
        {/* Protected routes - Admin */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<div>Admin Dashboard</div>} />
          <Route path="/admin/users" element={<div>Manage Users</div>} />
          <Route path="/admin/coaches" element={<div>Manage Coaches</div>} />
          <Route path="/admin/content" element={<div>Manage Content</div>} />
        </Route>
        
        {/* Default route - handles 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
