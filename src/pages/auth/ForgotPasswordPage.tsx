import React, { useState } from 'react';
import { 
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import AuthLayout from '../../components/auth/AuthLayout';
import { Link } from 'react-router-dom';

const ForgotPasswordPage: React.FC = () => {
  const { forgotPassword, error } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
  });
  
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await forgotPassword(values.email);
        setIsSubmitted(true);
      } catch (err) {
        // Error handling is managed by the AuthContext
      }
    },
  });
  
  return (
    <AuthLayout 
      title="Forgot Password" 
      subtitle="Enter your email and we'll send you a reset link"
    >
      {isSubmitted ? (
        <Box>
          <Alert severity="success" sx={{ mb: 3 }}>
            Reset password instructions have been sent to your email.
          </Alert>
          <Typography variant="body1" paragraph>
            Please check your inbox and follow the instructions to reset your password.
            If you don't receive an email within a few minutes, check your spam folder.
          </Typography>
          <Button
            component={Link}
            to="/login"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Back to Login
          </Button>
        </Box>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          
          <Box sx={{ mt: 3, mb: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={formik.isSubmitting}
              size="large"
              sx={{ py: 1.5 }}
            >
              {formik.isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Send Reset Link'}
            </Button>
          </Box>
          
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              component={Link}
              to="/login"
              color="primary"
            >
              Back to Login
            </Button>
          </Box>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
