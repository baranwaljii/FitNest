import React from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  MenuItem,
  Snackbar,
  Alert,
  Stack
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send
} from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useThemeContext } from '../context/ThemeContext';
import PageNavigation from '../components/common/PageNavigation';
import PageBreadcrumbs from '../components/common/PageBreadcrumbs';
import FloatingBackButton from '../components/common/FloatingBackButton';

const ContactForm = () => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required').min(20, 'Message must be at least 20 characters'),
    }),
    onSubmit: (values, { resetForm }) => {
      // In a real application, you would send this data to your backend
      console.log('Form data submitted:', values);
      setSnackbarOpen(true);
      resetForm();
    },
  });

  return (
    <>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Your Name"
            variant="outlined"
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="subject"
            name="subject"
            label="Subject"
            variant="outlined"
            select
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          >
            <MenuItem value="">Select a subject</MenuItem>
            <MenuItem value="General Inquiry">General Inquiry</MenuItem>
            <MenuItem value="Technical Support">Technical Support</MenuItem>
            <MenuItem value="Billing Question">Billing Question</MenuItem>
            <MenuItem value="Feature Request">Feature Request</MenuItem>
            <MenuItem value="Partnership">Partnership</MenuItem>
          </TextField>

          <TextField
            fullWidth
            id="message"
            name="message"
            label="Your Message"
            variant="outlined"
            multiline
            rows={6}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<Send />}
          >
            Send Message
          </Button>
        </Stack>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success" 
          variant="filled"
        >
          Your message has been sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </>
  );
};

const ContactPage: React.FC = () => {
  const { darkMode } = useThemeContext();

  return (
    <Box>
      {/* Page Navigation */}
      <PageNavigation 
        title="Contact Us" 
        showBackButton={true}
        showHomeButton={true}
      />
      
      {/* Breadcrumbs */}
      <PageBreadcrumbs />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: darkMode ?
            'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)' :
            'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)',
          pt: 8,
          pb: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Get In Touch
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Have questions or feedback? We'd love to hear from you. 
              Our team is here to help with anything you need.
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 4,
            mt: 6
          }}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                display: 'flex', 
                alignItems: 'center',
                minWidth: '250px',
                flex: 1,
                maxWidth: '300px'
              }}
            >
              <Email color="primary" sx={{ fontSize: 40, mr: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Email Us</Typography>
                <Typography variant="body2" color="text.secondary">
                  support@fitnest.com
                </Typography>
              </Box>
            </Paper>

            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                display: 'flex', 
                alignItems: 'center',
                minWidth: '250px',
                flex: 1,
                maxWidth: '300px'
              }}
            >
              <Phone color="primary" sx={{ fontSize: 40, mr: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Call Us</Typography>
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
            </Paper>

            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                display: 'flex', 
                alignItems: 'center',
                minWidth: '250px',
                flex: 1,
                maxWidth: '300px'
              }}
            >
              <LocationOn color="primary" sx={{ fontSize: 40, mr: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Visit Us</Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Fitness Street, Health City, FC 98765
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          alignItems: 'stretch'
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Send Us a Message
            </Typography>
            
            <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
              Fill out the form below and our team will get back to you as soon as possible. 
              We aim to respond to all inquiries within 24 hours.
            </Typography>
            
            <ContactForm />
          </Box>
          
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <Box>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Frequently Asked Questions
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                {[
                  {
                    question: "How do I reset my password?",
                    answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
                  },
                  {
                    question: "Can I cancel my subscription?",
                    answer: "Yes, you can cancel your subscription at any time from your account settings. No long-term commitments required."
                  },
                  {
                    question: "Is my data secure?",
                    answer: "Absolutely. We use industry-standard encryption to protect all your personal and fitness data. Your privacy is our priority."
                  },
                  {
                    question: "Do you offer refunds?",
                    answer: "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not completely satisfied."
                  }
                ].map((faq, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {faq.question}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            
            <Box sx={{ 
              mt: 4,
              p: 3, 
              bgcolor: darkMode ? 'background.paper' : 'grey.100',
              borderRadius: 2,
              border: 1,
              borderColor: darkMode ? 'divider' : 'grey.300'
            }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Support Hours
              </Typography>
              
              <Typography variant="body2" paragraph>
                Our support team is available during the following hours:
              </Typography>
              
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" fontWeight="medium">Monday - Friday:</Typography>
                  <Typography variant="body2">9:00 AM - 8:00 PM EST</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" fontWeight="medium">Saturday:</Typography>
                  <Typography variant="body2">10:00 AM - 6:00 PM EST</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" fontWeight="medium">Sunday:</Typography>
                  <Typography variant="body2">12:00 PM - 5:00 PM EST</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
      
      {/* Floating Back Button */}
      <FloatingBackButton backPath="/" />
    </Box>
  );
};

export default ContactPage;
