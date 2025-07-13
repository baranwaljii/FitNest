import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Stack,
  Avatar,
  Rating,
  Chip,
  Grid
} from '@mui/material';
import { 
  FitnessCenter, 
  Restaurant, 
  Timeline, 
  Group,
  TrendingUp,
  LocalFireDepartment,
  Star,
  CheckCircle,
  PlayCircleOutline,
  Security
} from '@mui/icons-material';
import Navbar from '../components/layout/Navbar';

const LandingPageNew: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 50%, #74B9FF 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 80%, rgba(255, 107, 107, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(0, 210, 211, 0.2) 0%, transparent 50%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant="h1" 
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 50%, #74B9FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 2,
                  }}
                >
                  FitNest Pro
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Transform Your Body, Elevate Your Mind
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    opacity: 0.9,
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  Join millions worldwide in achieving their fitness dreams with our AI-powered platform designed for peak performance and lasting results.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 5,
                      py: 2,
                      fontSize: '1.2rem',
                      background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontWeight: 700,
                      boxShadow: '0 12px 40px rgba(255, 107, 107, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #EE5A24 0%, #FF6B6B 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 16px 50px rgba(255, 107, 107, 0.6)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    component={Link}
                    to="/features"
                    variant="outlined"
                    size="large"
                    startIcon={<PlayCircleOutline />}
                    sx={{
                      px: 5,
                      py: 2,
                      fontSize: '1.2rem',
                      borderColor: 'white',
                      color: 'white',
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Watch Demo
                  </Button>
                </Box>
                
                {/* Trust Indicators */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap', mt: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Rating value={5} readOnly size="small" />
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>4.9/5 Rating</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>•</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>2M+ Active Users</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>•</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>150+ Countries</Typography>
                </Box>
              </Stack>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Fitness transformation"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    transform: 'perspective(1000px) rotateY(-15deg)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)',
                    },
                  }}
                />
                <Chip
                  icon={<Star />}
                  label="Premium Quality"
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: '10%',
                    background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
                    color: 'white',
                    fontWeight: 700,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Premium Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #6C5CE7 0%, #74B9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 2,
            }}
          >
            Why Choose FitNest Pro?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Experience the future of fitness with our cutting-edge technology and personalized approach
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {[
            {
              icon: <LocalFireDepartment sx={{ fontSize: 40 }} />,
              title: 'AI-Powered Workouts',
              description: 'Personalized exercise routines that adapt to your progress and preferences',
              color: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
              badge: 'Popular'
            },
            {
              icon: <Restaurant sx={{ fontSize: 40 }} />,
              title: 'Smart Nutrition',
              description: 'Customized meal plans with macro tracking and recipe suggestions',
              color: 'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
              badge: 'New'
            },
            {
              icon: <Timeline sx={{ fontSize: 40 }} />,
              title: 'Progress Analytics',
              description: 'Detailed insights and visualizations of your fitness journey',
              color: 'linear-gradient(135deg, #A8EDEA 0%, #74B9FF 100%)',
              badge: 'Pro'
            },
            {
              icon: <Group sx={{ fontSize: 40 }} />,
              title: 'Community Support',
              description: 'Connect with fitness enthusiasts and expert trainers worldwide',
              color: 'linear-gradient(135deg, #D299C2 0%, #FEDD89 100%)',
              badge: 'Featured'
            },
            {
              icon: <TrendingUp sx={{ fontSize: 40 }} />,
              title: 'Goal Tracking',
              description: 'Set, track, and achieve your fitness milestones with precision',
              color: 'linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%)',
              badge: 'Essential'
            },
            {
              icon: <FitnessCenter sx={{ fontSize: 40 }} />,
              title: 'Equipment Free',
              description: 'Effective workouts that can be done anywhere, anytime',
              color: 'linear-gradient(135deg, #FDBB2D 0%, #22C1C3 100%)',
              badge: 'Flexible'
            },
          ].map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: feature.color,
                  color: 'white',
                  borderRadius: 4,
                  overflow: 'visible',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Chip
                  label={feature.badge}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: -10,
                    right: 16,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: '#6C5CE7',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                  }}
                />
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{
              textAlign: 'center',
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 8,
            }}
          >
            What Our Users Say
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                name: 'Sarah Johnson',
                role: 'Fitness Enthusiast',
                rating: 5,
                text: 'FitNest Pro completely transformed my approach to fitness. The AI recommendations are spot-on!',
                avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150'
              },
              {
                name: 'Mike Chen',
                role: 'Personal Trainer',
                rating: 5,
                text: 'I recommend FitNest Pro to all my clients. The progress tracking is incredibly detailed.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Nutrition Coach',
                rating: 5,
                text: 'The nutrition features are game-changing. My clients love the meal planning tools!',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
              },
            ].map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    borderRadius: 3,
                    p: 3,
                  }}
                >
                  <Stack spacing={3}>
                    <Rating value={testimonial.rating} readOnly sx={{ color: '#FFD93D' }} />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                      "{testimonial.text}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #6C5CE7 0%, #74B9FF 100%)', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            sx={{
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              mb: 3,
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{
              color: 'white',
              opacity: 0.9,
              mb: 5,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Join millions of users who have already transformed their lives with FitNest Pro
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              startIcon={<CheckCircle />}
              sx={{
                px: 6,
                py: 2.5,
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 700,
                boxShadow: '0 12px 40px rgba(255, 107, 107, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #EE5A24 0%, #FF6B6B 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 16px 50px rgba(255, 107, 107, 0.6)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started Free
            </Button>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              size="large"
              startIcon={<Security />}
              sx={{
                px: 6,
                py: 2.5,
                fontSize: '1.2rem',
                borderColor: 'white',
                color: 'white',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Sign In
            </Button>
          </Stack>
          
          <Typography variant="body2" sx={{ color: 'white', opacity: 0.7, mt: 3 }}>
            No credit card required • 14-day free trial • Cancel anytime
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPageNew;