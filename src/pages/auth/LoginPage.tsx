import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Log in to continue your fitness journey"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
