import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout 
      title="Create Your Account" 
      subtitle="Join FitNest and start your fitness journey"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
