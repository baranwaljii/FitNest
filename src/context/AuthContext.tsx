import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserRole, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role?: UserRole) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
};

// Create auth context
const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  forgotPassword: async () => {},
  resetPassword: async () => {},
});

// Mock user data for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user' as UserRole,
    avatar: null,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'coach' as UserRole,
    avatar: null,
    createdAt: new Date().toISOString(),
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkAuth = () => {
      try {
        const savedUser = localStorage.getItem('currentUser');
        
        if (savedUser) {
          const user = JSON.parse(savedUser);
          setAuthState({
            isAuthenticated: true,
            user,
            loading: false,
            error: null,
          });
        } else {
          setAuthState({ ...initialState, loading: false });
        }
      } catch (err) {
        localStorage.removeItem('currentUser');
        setAuthState({ ...initialState, loading: false });
      }
    };
    
    // Add small delay to simulate network request
    setTimeout(checkAuth, 500);
  }, []);

  // Login user (mock implementation)
  const login = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock data
      const user = MOCK_USERS.find(u => u.email === email && u.password === password);
      
      if (user) {
        const userForState = {
          _id: user.id,
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          createdAt: new Date(user.createdAt),
          updatedAt: new Date(),
        };
        
        localStorage.setItem('currentUser', JSON.stringify({
          ...userForState,
          createdAt: userForState.createdAt.toISOString(),
          updatedAt: userForState.updatedAt.toISOString(),
        }));
        
        setAuthState({
          isAuthenticated: true,
          user: userForState,
          loading: false,
          error: null,
        });
      } else {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: 'Invalid email or password',
        }));
        throw new Error('Invalid email or password');
      }
    } catch (err: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: err.message || 'Login failed',
      }));
      throw err;
    }
  };

  // Register user (mock implementation)
  const register = async (name: string, email: string, password: string, role = UserRole.USER) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUser = MOCK_USERS.find(u => u.email === email);
      
      if (existingUser) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: 'User with this email already exists',
        }));
        throw new Error('User with this email already exists');
      }
      
      // Create new user
      const newUser = {
        _id: Date.now().toString(),
        id: Date.now().toString(),
        name,
        email,
        role,
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      // Add to mock users (in real app, this would be saved to backend)
      MOCK_USERS.push({ ...newUser, password, createdAt: newUser.createdAt.toISOString() });
      
      // Save to localStorage
      const userWithoutPassword = newUser;
      localStorage.setItem('currentUser', JSON.stringify({
        ...userWithoutPassword,
        createdAt: userWithoutPassword.createdAt.toISOString(),
        updatedAt: userWithoutPassword.updatedAt.toISOString(),
      }));
      
      setAuthState({
        isAuthenticated: true,
        user: userWithoutPassword,
        loading: false,
        error: null,
      });
    } catch (err: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: err.message || 'Registration failed',
      }));
      throw err;
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('currentUser');
    setAuthState({
      ...initialState,
      loading: false,
    });
  };

  // Forgot password (mock implementation)
  const forgotPassword = async (email: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists
      const user = MOCK_USERS.find(u => u.email === email);
      
      if (!user) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: 'No user found with this email address',
        }));
        throw new Error('No user found with this email address');
      }
      
      // In real app, send reset email here
      console.log(`Password reset email sent to ${email}`);
      
      setAuthState(prev => ({ ...prev, loading: false }));
    } catch (err: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: err.message || 'Error sending reset email',
      }));
      throw err;
    }
  };

  // Reset password (mock implementation)
  const resetPassword = async (token: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real app, validate token and update password
      console.log('Password reset successfully');
      
      setAuthState(prev => ({ ...prev, loading: false }));
    } catch (err: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: err.message || 'Error resetting password',
      }));
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
