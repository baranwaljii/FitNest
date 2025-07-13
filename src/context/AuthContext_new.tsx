import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserRole, AuthState } from '../types';

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

const API_URL = 'http://localhost:5000/api';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialState);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setAuthState({ ...initialState, loading: false });
        return;
      }
      
      try {
        const response = await fetch(`${API_URL}/users/me`, {
          headers: {
            'x-auth-token': token,
          },
        });
        
        if (response.ok) {
          const user = await response.json();
          setAuthState({
            isAuthenticated: true,
            user,
            loading: false,
            error: null,
          });
        } else {
          localStorage.removeItem('token');
          setAuthState({ ...initialState, loading: false });
        }
      } catch (err) {
        localStorage.removeItem('token');
        setAuthState({ ...initialState, loading: false });
      }
    };
    
    checkAuth();
  }, []);

  // Login user
  const login = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setAuthState({
          isAuthenticated: true,
          user: data.user,
          loading: false,
          error: null,
        });
      } else {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: data.message || 'Login failed',
        }));
        throw new Error(data.message || 'Login failed');
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

  // Register user
  const register = async (name: string, email: string, password: string, role = UserRole.USER) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setAuthState({
          isAuthenticated: true,
          user: data.user,
          loading: false,
          error: null,
        });
      } else {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: data.message || 'Registration failed',
        }));
        throw new Error(data.message || 'Registration failed');
      }
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
    localStorage.removeItem('token');
    setAuthState({
      ...initialState,
      loading: false,
    });
  };

  // Forgot password (simple implementation)
  const forgotPassword = async (email: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAuthState(prev => ({ ...prev, loading: false }));
    } catch (err: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Error sending reset email',
      }));
      throw err;
    }
  };

  // Reset password (simple implementation)
  const resetPassword = async (token: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAuthState(prev => ({ ...prev, loading: false }));
    } catch (err: any) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Error resetting password',
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
