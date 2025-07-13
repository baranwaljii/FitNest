import React from 'react';
import { Box, Typography, Container, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { FitnessCenter, Restaurant, TrendingUp } from '@mui/icons-material';
import Navbar from '../components/layout/Navbar';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 4, sm: 6, md: 8 },
          textAlign: 'center',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #6C5CE7 0%, #00D2D3 50%, #A29BFE 100%)',
            opacity: 0.9,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 50%, #74B9FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              mb: 3,
            }}
          >
            FitNest
          </Typography>
          <Typography 
            variant="h4" 
            paragraph
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              px: { xs: 2, sm: 0 },
              mb: { xs: 3, md: 4 },
              fontWeight: 300,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Transform Your Body, Elevate Your Mind
          </Typography>
          <Typography 
            variant="h6" 
            paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              px: { xs: 2, sm: 0 },
              mb: { xs: 4, md: 5 },
              opacity: 0.9,
            }}
          >
            Join millions worldwide in achieving their fitness dreams with our cutting-edge platform
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 8px 32px rgba(255, 107, 107, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #EE5A24 0%, #FF6B6B 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(255, 107, 107, 0.6)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Journey
            </Button>
            <Button
              component={Link}
              to="/features"
              variant="outlined"
              size="large"
              sx={{
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
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
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 10 }, px: { xs: 2, sm: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6C5CE7 0%, #00D2D3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 3,
            }}
          >
            Why Choose FitNest?
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Experience the future of fitness with our innovative features designed for modern lifestyles
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ 
              height: '100%', 
              textAlign: 'center', 
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%)',
              color: 'white',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 60px rgba(108, 92, 231, 0.4)',
              },
            }}>
              <CardContent>
                <FitnessCenter sx={{ 
                  fontSize: { xs: 56, sm: 72 }, 
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '1.4rem', sm: '1.6rem' },
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  AI-Powered Workouts
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Get personalized workout plans powered by artificial intelligence that adapts to your progress and preferences
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ 
              height: '100%', 
              textAlign: 'center', 
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #00D2D3 0%, #55EFC4 100%)',
              color: 'white',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 60px rgba(0, 210, 211, 0.4)',
              },
            }}>
              <CardContent>
                <Restaurant sx={{ 
                  fontSize: { xs: 56, sm: 72 }, 
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '1.4rem', sm: '1.6rem' },
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Smart Nutrition
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Track your nutrition with smart food recognition and get personalized meal recommendations for optimal health
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ 
              height: '100%', 
              textAlign: 'center', 
              p: { xs: 3, sm: 4 },
              borderRadius: 4,
              background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)',
              color: 'white',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 60px rgba(255, 107, 107, 0.4)',
              },
            }}>
              <CardContent>
                <TrendingUp sx={{ 
                  fontSize: { xs: 56, sm: 72 }, 
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                }} />
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '1.4rem', sm: '1.6rem' },
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  Real-time Analytics
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ 
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Monitor your progress with advanced analytics and insights that help you reach your goals faster
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #74B9FF 0%, #0984E3 100%)',
          py: { xs: 6, sm: 8, md: 10 },
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
            background: 'radial-gradient(circle at 30% 80%, rgba(255, 107, 107, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(0, 210, 211, 0.3) 0%, transparent 50%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 }, position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'white',
              mb: 3,
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            Ready to Transform Your Life?
          </Typography>
          <Typography 
            variant="h5" 
            paragraph 
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              px: { xs: 1, sm: 0 },
              mb: { xs: 4, md: 5 },
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Join over 2 million users who have achieved their fitness goals with FitNest's revolutionary platform
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              sx={{
                px: { xs: 5, sm: 7 },
                py: { xs: 2, sm: 2.5 },
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                background: 'linear-gradient(135deg, #FFD93D 0%, #FF6B6B 100%)',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 700,
                color: '#2D3436',
                boxShadow: '0 12px 40px rgba(255, 217, 61, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #FFCC02 0%, #EE5A24 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 16px 50px rgba(255, 217, 61, 0.6)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Start Free Trial
            </Button>
            <Button
              component={Link}
              to="/pricing"
              variant="outlined"
              size="large"
              sx={{
                px: { xs: 5, sm: 7 },
                py: { xs: 2, sm: 2.5 },
                fontSize: { xs: '1.1rem', sm: '1.2rem' },
                borderColor: 'white',
                color: 'white',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
                borderWidth: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'white',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Plans
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2D3436 0%, #636E72 100%)',
          color: 'white',
          py: { xs: 4, sm: 6 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h5"
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #FFD93D 0%, #00D2D3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
              }}
            >
              FitNest
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                fontSize: { xs: '0.9rem', sm: '1rem' },
                opacity: 0.8,
                maxWidth: '400px',
                mx: 'auto',
              }}
            >
              Empowering your fitness journey with cutting-edge technology and personalized experiences.
            </Typography>
          </Box>
          <Typography 
            variant="body2"
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              opacity: 0.6,
            }}
          >
            © 2025 FitNest. All rights reserved. | Made with ❤️ for fitness enthusiasts worldwide
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
