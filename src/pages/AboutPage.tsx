import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button,
  Avatar,
  Divider,
  Stack,
} from '@mui/material';
// Import team member images
import amanImage from '../assets/images/aman-verma.jpg';
import anuragImage from '../assets/images/anurag-barnwala.png';
import {
  FitnessCenter,
  Timeline,
  Psychology,
  VerifiedUser,
  EmojiEvents,
  Public,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import PageNavigation from '../components/common/PageNavigation';
import PageBreadcrumbs from '../components/common/PageBreadcrumbs';
import FloatingBackButton from '../components/common/FloatingBackButton';

const AboutPage: React.FC = () => {
  const { darkMode } = useThemeContext();
  
  const teamMembers = [
    {
      name: "Anurag Kumar Barnwal",
      title: "Founder & CEO",
      image: anuragImage,
      bio: "Visionary leader with a passion for making fitness accessible to everyone in India. Anurag founded FitNest with the mission to combine technology and fitness expertise for the Indian market."
    },
    {
      name: "Aman Verma",
      title: "Founder & COO",
      image: amanImage,
      bio: "Operations expert with a vision for fitness technology. As a founder and COO, Aman drives the day-to-day operations and strategic growth of FitNest across India."
    }
  ];

  const values = [
    {
      title: "Scientific Approach",
      description: "We believe in evidence-based fitness methods. All our features and recommendations are backed by scientific research and expert knowledge.",
      icon: <Timeline />
    },
    {
      title: "Personalization",
      description: "Every body is different. We focus on providing personalized recommendations that work for your unique needs and goals.",
      icon: <Psychology />
    },
    {
      title: "Integrity",
      description: "We're committed to honest, transparent business practices. No hidden fees, no data selling, and no false promises.",
      icon: <VerifiedUser />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our user experience to our customer support and the results we help you achieve.",
      icon: <EmojiEvents />
    },
    {
      title: "Inclusivity",
      description: "Fitness is for everyone. We design our platform to be accessible and beneficial for people of all fitness levels, ages, and backgrounds.",
      icon: <Public />
    },
  ];

  return (
    <Box>
      {/* Page Navigation */}
      <PageNavigation 
        title="About FitNest" 
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
          pt: { xs: 8, sm: 10, md: 12 },
          pb: { xs: 6, sm: 8, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
          <FitnessCenter sx={{ 
            fontSize: { xs: 48, sm: 60 }, 
            color: 'primary.main', 
            mb: 2 
          }} />
          
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
            }}
          >
            About FitNest
          </Typography>
          
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ 
              maxWidth: 800, 
              mx: 'auto', 
              mb: 4,
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
              px: { xs: 1, sm: 0 }
            }}
          >
            We're on a mission to make fitness tracking simple, effective, and accessible to everyone.
          </Typography>
        </Container>
      </Box>
      
      {/* Our Story */}
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography 
            variant="h3" 
            component="h2" 
            fontWeight="bold" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Our Story
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' }, 
              lineHeight: 1.7,
              mb: { xs: 3, md: 4 }
            }}
          >
            FitNest was founded in 2022 with a simple idea: fitness tracking should be easy, motivating, and personalized for Indian users. 
            Our founders, Anurag Kumar Barnwal and Aman Verma, noticed that many Indians struggled to maintain their fitness 
            routines because tracking progress was cumbersome and often demotivating.
          </Typography>
          
          <Box 
            component="img" 
            src="https://source.unsplash.com/random/1200x600/?fitness-team" 
            alt="FitNest team" 
            sx={{ 
              width: '100%', 
              maxHeight: { xs: 250, sm: 350, md: 400 }, 
              objectFit: 'cover', 
              borderRadius: 4,
              my: { xs: 4, md: 6 }
            }}
          />
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' }, 
              lineHeight: 1.7,
              mb: { xs: 2, md: 2 }
            }}
          >
            What started as a small team of fitness enthusiasts and software developers has grown into a global platform 
            helping thousands of users achieve their fitness goals. We combine expertise in exercise science, nutrition, 
            and cutting-edge technology to create a platform that adapts to your unique needs.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' }, 
              lineHeight: 1.7, 
              mt: 2 
            }}
          >
            Today, FitNest is used by people in over 30 countries, from beginners just starting their fitness journey 
            to professional athletes optimizing their training. But no matter how much we grow, our mission remains the same: 
            to help you become the healthiest version of yourself.
          </Typography>
        </Box>
      </Container>
      
      {/* Our Values */}
      <Box sx={{ bgcolor: darkMode ? 'background.paper' : 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            Our Values
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary" 
            textAlign="center" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            These core principles guide everything we do at FitNest
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            },
            gap: 4
          }}>
            {values.map((value, index) => (
              <Paper
                key={index}
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box 
                  sx={{ 
                    p: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    mb: 2
                  }}
                >
                  {value.icon}
                </Box>
                
                <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                  {value.title}
                </Typography>
                
                <Typography color="text.secondary">
                  {value.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* Team Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
          Meet Our Team
        </Typography>
        
        <Typography 
          variant="h6" 
          color="text.secondary" 
          textAlign="center" 
          sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
        >
          The passionate people behind FitNest
        </Typography>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)' 
          },
          gap: 4,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          {teamMembers.map((member, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                borderRadius: 3,
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8
                }
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ 
                  width: 150, 
                  height: 150, 
                  mb: 2,
                  border: '3px solid',
                  borderColor: 'primary.main',
                  boxShadow: 3
                }}
              />
              
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              
              <Typography variant="subtitle1" color="primary.main" gutterBottom>
                {member.title}
              </Typography>
              
              <Divider sx={{ width: '50%', my: 2 }} />
              
              <Typography variant="body2" color="text.secondary">
                {member.bio}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
      
      {/* Statistics */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(4, 1fr)' 
            },
            gap: 4,
            textAlign: 'center'
          }}>
            {[
              { value: '50,000+', label: 'Active Users' },
              { value: '30+', label: 'Countries' },
              { value: '1M+', label: 'Workouts Tracked' },
              { value: '4.8', label: 'Average Rating' }
            ].map((stat, index) => (
              <Box key={index}>
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="h6">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* CTA Section */}
      <Box sx={{ py: 10, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Join Our Fitness Community
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}
          >
            Be part of our mission to make fitness simple, effective, and accessible to everyone.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="primary"
              size="large"
              sx={{ py: 1.5, px: 4 }}
            >
              Get Started
            </Button>
            
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              color="primary"
              size="large"
              sx={{ py: 1.5, px: 4 }}
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>
      
      {/* Floating Back Button */}
      <FloatingBackButton backPath="/" />
    </Box>
  );
};

export default AboutPage;
