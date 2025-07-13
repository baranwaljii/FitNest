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
  Link as MuiLink,
  FormControl,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types';

const RegisterForm: React.FC = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.USER);
  
  // Registration form validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name should be at least 2 characters'),
    email: Yup.string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password should be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
    agreeToTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
  });
  
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await register(
          values.name,
          values.email,
          values.password,
          userRole
        );
        // On successful registration, redirect to dashboard
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
  
  // Handle role change
  const handleRoleChange = (event: SelectChangeEvent) => {
    setUserRole(event.target.value as UserRole);
  };
  
  return (
    <form onSubmit={formik.handleSubmit}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Full Name"
        variant="outlined"
        margin="normal"
        autoComplete="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      
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
      
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        variant="outlined"
        margin="normal"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      
      <FormControl fullWidth margin="normal">
        <InputLabel id="role-select-label">I am registering as</InputLabel>
        <Select
          labelId="role-select-label"
          id="role-select"
          value={userRole}
          label="I am registering as"
          onChange={handleRoleChange}
        >
          <MenuItem value={UserRole.USER}>Fitness Enthusiast (User)</MenuItem>
          <MenuItem value={UserRole.COACH}>Fitness Coach</MenuItem>
        </Select>
        <FormHelperText>
          {userRole === UserRole.COACH ? 
            'Coach accounts require approval by admin' : 
            'Users can track workouts, nutrition, and connect with coaches'}
        </FormHelperText>
      </FormControl>
      
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formik.values.agreeToTerms}
              onChange={formik.handleChange}
              color="primary"
            />
          }
          label="I agree to the Terms and Conditions and Privacy Policy"
        />
        {formik.touched.agreeToTerms && formik.errors.agreeToTerms && (
          <FormHelperText error>{formik.errors.agreeToTerms}</FormHelperText>
        )}
      </Box>
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        disabled={formik.isSubmitting}
        sx={{ mt: 3, mb: 2, py: 1.5 }}
      >
        {formik.isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Register'}
      </Button>
      
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="body2">
          Already have an account?{' '}
          <MuiLink
            component={Link}
            to="/login"
            variant="body2"
            sx={{ textDecoration: 'none' }}
          >
            Sign in
          </MuiLink>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisterForm;
