import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button,
  Divider,
  Stack
} from '@mui/material';
// Import feature images
import progressAnalyticsImage from '../assets/images/features/progress-analytics.png';
import nutritionPlanningImage from '../assets/images/features/nutrition-planning.png';
import {
  FitnessCenter,
  Timeline,
  TrendingUp,
  CalendarMonth,
  Settings,
  DirectionsRun,
  Restaurant,
  Nightlight,
  LocalDrink
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import PageNavigation from '../components/common/PageNavigation';
import PageBreadcrumbs from '../components/common/PageBreadcrumbs';
import FloatingBackButton from '../components/common/FloatingBackButton';

const FeatureSection: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  direction?: 'left' | 'right';
  color?: string;
}> = ({ 
  title, 
  description, 
  icon, 
  image = 'https://source.unsplash.com/random/600x400/?fitness', 
  direction = 'left',
  color
}) => {
  return (
    <Box
      sx={{
        py: 8,
        display: 'flex',
        flexDirection: { xs: 'column', md: direction === 'left' ? 'row' : 'row-reverse' },
        alignItems: 'center',
        gap: 6
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            mb: 2 
          }}
        >
          <Box sx={{ 
            p: 1.5, 
            borderRadius: 2, 
            bgcolor: color || 'primary.main', 
            color: 'white', 
            display: 'flex' 
          }}>
            {icon}
          </Box>
          <Typography variant="h4" component="h2" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
          {description}
        </Typography>
        
        <Button 
          component={RouterLink} 
          to="/register" 
          variant="contained" 
          color="primary"
          size="large"
        >
          Try it Now
        </Button>
      </Box>
      
      <Box sx={{ flex: 1 }}>
        <Paper
          elevation={4}
          sx={{
            overflow: 'hidden',
            borderRadius: 4,
            height: 400,
            width: '100%'
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Paper>
      </Box>
    </Box>
  );
};

const FeaturesPage: React.FC = () => {
  const { darkMode } = useThemeContext();
  
  const features = [
    {
      title: "Comprehensive Workout Tracking",
      description: "Log all aspects of your workouts including exercises, sets, reps, weight, and duration. Our intelligent tracking system remembers your previous workouts and suggests progressive overload to optimize your results. Create custom workout routines or choose from our extensive library of pre-designed programs tailored to various fitness goals.",
      icon: <FitnessCenter />,
      image: "https://source.unsplash.com/random/600x400/?workout",
      color: "#FF5252"
    },
    {
      title: "Advanced Progress Analytics",
      description: "Visualize your fitness journey with beautiful, interactive charts and graphs that track your progress over time. Analyze trends in your strength, endurance, body measurements, and more. Set goals and milestones, then watch as our analytics help you stay on track to achieving them with personalized insights and recommendations.",
      icon: <Timeline />,
      image: progressAnalyticsImage,
      color: "#2979FF"
    },
    {
      title: "Nutrition & Meal Planning",
      description: "Track your daily nutrition with our comprehensive food database containing thousands of items with detailed macro and micronutrient information. Create meal plans, set calorie targets, and monitor your intake to ensure you're fueling your body for optimal performance and recovery. Generate shopping lists and discover healthy recipes aligned with your fitness goals.",
      icon: <Restaurant />,
      image: nutritionPlanningImage,
      color: "#00C853"
    },
    {
      title: "Personal Coaching & Support",
      description: "Connect with certified fitness professionals for personalized guidance and motivation. Schedule one-on-one virtual sessions, get custom workout and nutrition plans, and receive expert advice tailored to your specific needs and goals. Our coaches provide real-time feedback on your form and technique to maximize results and prevent injury.",
      icon: <TrendingUp />,
      image: "https://source.unsplash.com/random/600x400/?coach",
      color: "#AA00FF"
    },
    {
      title: "Smart Scheduling & Reminders",
      description: "Never miss a workout with our intelligent scheduling system. Plan your fitness activities around your busy life, set reminders, and receive notifications to keep you accountable. Our algorithm learns your preferences and helps you maintain consistency by suggesting optimal times for workouts based on your historical patterns.",
      icon: <CalendarMonth />,
      image: "https://source.unsplash.com/random/600x400/?calendar",
      color: "#FF6D00"
    },
    {
      title: "Comprehensive Health Tracking",
      description: "Monitor all aspects of your health beyond just workouts. Track your sleep quality, water intake, step count, heart rate, and more in one centralized dashboard. Set hydration goals with our water tracker, log your sleep patterns to ensure proper recovery, and monitor your daily activity levels to maintain a holistic approach to fitness.",
      icon: <Nightlight />,
      image: "https://source.unsplash.com/random/600x400/?sleep",
      color: "#304FFE"
    }
  ];

  return (
    <Box>
      {/* Page Navigation */}
      <PageNavigation 
        title="Features" 
        showBackButton={true}
        showHomeButton={true}
      />
      
      {/* Breadcrumbs */}
      <PageBreadcrumbs />
      
      {/* Hero Section */}
      <Box
        sx={{
          pt: 8,
          pb: 10,
          background: darkMode ? 
            'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)' : 
            'linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Powerful Features for Your
            <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
              Fitness Journey
            </Box>
          </Typography>
          
          <Typography 
            variant="h5" 
            color="text.secondary"
            sx={{ mb: 5, maxWidth: '800px', mx: 'auto' }}
          >
            Discover how FitNest helps thousands of users achieve their fitness goals with our comprehensive suite of tools and features.
          </Typography>
          
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="primary"
            size="large"
            sx={{ py: 1.5, px: 4, mb: 6 }}
          >
            Start Your Free Trial
          </Button>
          
          {/* Feature Icons */}
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(2, 1fr)', 
                sm: 'repeat(3, 1fr)',
                md: 'repeat(6, 1fr)' 
              },
              gap: 3,
            }}
          >
            {[
              { icon: <DirectionsRun />, label: "Workouts" },
              { icon: <Restaurant />, label: "Nutrition" },
              { icon: <Timeline />, label: "Analytics" },
              { icon: <Nightlight />, label: "Sleep" },
              { icon: <LocalDrink />, label: "Hydration" },
              { icon: <Settings />, label: "Customizable" }
            ].map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Box 
                  sx={{
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    boxShadow: 2,
                    color: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 1,
                    fontSize: '2rem'
                  }}
                >
                  {item.icon}
                </Box>
                <Typography fontWeight="medium">{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* Feature Details */}
      <Container sx={{ py: 4 }}>
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <FeatureSection
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              image={feature.image}
              direction={index % 2 === 0 ? 'left' : 'right'}
              color={feature.color}
            />
            {index < features.length - 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </React.Fragment>
        ))}
      </Container>
      
      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            Ready to Transform Your Fitness?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
            Join thousands of users who have already improved their health and fitness with FitNest's powerful features and personalized approach.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
          >
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ py: 1.5, px: 4, fontWeight: 'bold' }}
            >
              Start Free Trial
            </Button>
            
            <Button
              component={RouterLink}
              to="/"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ py: 1.5, px: 4, borderColor: 'white' }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>
      
      {/* Floating Back Button */}
      <FloatingBackButton backPath="/" />
    </Box>
  );
};

export default FeaturesPage;
