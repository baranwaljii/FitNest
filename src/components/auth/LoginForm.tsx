import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Alert, 
  CircularProgress,
  InputAdornment,
  IconButton,
  Link as MuiLink
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
  const { login, error } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  // Login form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters'),
  });
  
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        // On successful login, redirect to dashboard
        navigate('/dashboard');
      } catch (err) {
        // Error handling is managed by the AuthContext
      }
    },
  });
  
  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Demo Credentials Info */}
      <Alert severity="info" sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
          Demo Credentials:
        </Typography>
        <Typography variant="body2">
          Email: john@example.com
        </Typography>
        <Typography variant="body2">
          Password: password123
        </Typography>
      </Alert>

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
      
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        margin="normal"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      
      <Box sx={{ textAlign: 'right', mt: 1, mb: 2 }}>
        <MuiLink
          component={Link}
          to="/forgot-password"
          variant="body2"
          sx={{ textDecoration: 'none' }}
        >
          Forgot password?
        </MuiLink>
      </Box>
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        disabled={formik.isSubmitting}
        sx={{ mb: 2, py: 1.5 }}
      >
        {formik.isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Login'}
      </Button>
      
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2">
          Don't have an account?{' '}
          <MuiLink
            component={Link}
            to="/register"
            variant="body2"
            sx={{ textDecoration: 'none' }}
          >
            Sign up
          </MuiLink>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
