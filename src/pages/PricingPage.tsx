import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Paper, 
  Divider,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';
import PageNavigation from '../components/common/PageNavigation';
import PageBreadcrumbs from '../components/common/PageBreadcrumbs';
import FloatingBackButton from '../components/common/FloatingBackButton';

const PricingPage: React.FC = () => {
  const { darkMode } = useThemeContext();
  const [isAnnual, setIsAnnual] = React.useState(true);

  const handleBillingChange = () => {
    setIsAnnual(!isAnnual);
  };

  const pricingPlans = [
    {
      name: "Basic",
      price: isAnnual ? 0 : 0,
      description: "Essential features for individuals starting their fitness journey in India",
      features: [
        { included: true, text: "Workout tracking" },
        { included: true, text: "Basic nutrition tracking" },
        { included: true, text: "Progress charts" },
        { included: false, text: "Customized workout plans" },
        { included: false, text: "Coach access" },
        { included: false, text: "Advanced analytics" },
        { included: false, text: "Premium content" }
      ],
      buttonText: "Start Free",
      buttonVariant: "outlined",
      highlighted: false
    },
    {
      name: "Pro",
      price: isAnnual ? 2.99 : 3.99,
      description: "Perfect for Indian fitness enthusiasts who want to take it to the next level",
      features: [
        { included: true, text: "Everything in Basic" },
        { included: true, text: "Customized workout plans" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "Water & sleep tracking" },
        { included: true, text: "Meal planning" },
        { included: false, text: "1-on-1 coach access" },
        { included: false, text: "Premium content" }
      ],
      buttonText: "Choose Pro",
      buttonVariant: "contained",
      highlighted: true
    },
    {
      name: "Premium",
      price: isAnnual ? 4.99 : 7.99,
      description: "Comprehensive solution for Indians serious about fitness transformation",
      features: [
        { included: true, text: "Everything in Pro" },
        { included: true, text: "1-on-1 coach access" },
        { included: true, text: "Premium workout content" },
        { included: true, text: "Video analysis" },
        { included: true, text: "Priority support" },
        { included: true, text: "Nutrition counseling" },
        { included: true, text: "Exclusive community access" }
      ],
      buttonText: "Choose Premium",
      buttonVariant: "outlined",
      highlighted: false
    }
  ];

  const getFaq = () => [
    {
      question: "What happens after my trial ends?",
      answer: "After your free trial period, your account will automatically switch to the Basic plan which is free forever. You can upgrade to Pro or Premium at any time."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time. Changes to your subscription will be applied immediately."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "No, all plans are subscription-based with no long-term commitment. You can cancel anytime without penalty."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, PhonePe, Google Pay, and Paytm. All payments are securely processed and encrypted."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "Do you offer discounts for teams or families?",
      answer: "Yes, we offer special pricing for families and teams. Contact our sales team for more information on group discounts."
    }
  ];

  return (
    <Box>
      {/* Page Navigation */}
      <PageNavigation 
        title="Pricing Plans" 
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
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Simple, Transparent Pricing
          </Typography>
          
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Choose the plan that fits your fitness goals. All plans include a 14-day free trial and are specially priced for India.
          </Typography>

          {/* Billing Toggle */}
          <Box sx={{ mb: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" color={!isAnnual ? 'primary' : 'text.secondary'}>
              Monthly
            </Typography>
            
            <FormControlLabel
              control={
                <Switch
                  checked={isAnnual}
                  onChange={handleBillingChange}
                  color="primary"
                />
              }
              label=""
              sx={{ mx: 2 }}
            />
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" color={isAnnual ? 'primary' : 'text.secondary'}>
                Annual
              </Typography>
              
              <Chip 
                label="Save 40%" 
                color="primary" 
                size="small" 
                variant={darkMode ? "outlined" : "filled"}
                sx={{ ml: 1 }} 
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Container>
        <Box 
          sx={{ 
            mt: -6, 
            mb: 8,
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 3,
            justifyContent: 'center'
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              elevation={plan.highlighted ? 8 : 2}
              sx={{
                maxWidth: 380,
                width: '100%',
                position: 'relative',
                border: plan.highlighted ? 2 : 0,
                borderColor: 'primary.main',
                transform: plan.highlighted ? { md: 'scale(1.05)' } : 'none',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: { md: plan.highlighted ? 'scale(1.07)' : 'scale(1.03)' },
                  boxShadow: plan.highlighted ? 12 : 6
                }
              }}
            >
              {plan.highlighted && (
                <Chip
                  label="MOST POPULAR"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: -15,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 'bold',
                  }}
                />
              )}
              
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom textAlign="center">
                  {plan.name}
                </Typography>
                
                <Box sx={{ textAlign: 'center', my: 3 }}>
                  <Typography component="span" variant="h3" fontWeight="bold">
                    ₹{(plan.price * 83).toFixed(0)}
                  </Typography>
                  <Typography component="span" variant="h6" color="text.secondary">
                    /month
                  </Typography>
                </Box>
                
                <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ minHeight: 60, mb: 3 }}>
                  {plan.description}
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ my: 4 }}>
                  {plan.features.map((feature, idx) => (
                    <Box 
                      key={idx} 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2
                      }}
                    >
                      {feature.included ? (
                        <CheckIcon color="success" sx={{ mr: 1.5 }} />
                      ) : (
                        <CloseIcon color="disabled" sx={{ mr: 1.5 }} />
                      )}
                      <Typography 
                        color={feature.included ? 'text.primary' : 'text.secondary'}
                        fontWeight={feature.included ? 'medium' : 'normal'}
                      >
                        {feature.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                
                <Button
                  component={RouterLink}
                  to="/register"
                  variant={plan.buttonVariant as "contained" | "outlined"}
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 2, py: 1.5 }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
        
        {/* Money-back guarantee */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="subtitle1" color="text.secondary">
            All paid plans come with a 30-day money-back guarantee and GST invoice. No questions asked.
          </Typography>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" component="h2" textAlign="center" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            textAlign="center" 
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Still have questions? Contact our support team at support@fitnest.in or call us at +91 8800XXXX12
          </Typography>
          
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
              maxWidth: 1000,
              mx: 'auto'
            }}
          >
            {getFaq().map((faq, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{ p: 3, height: '100%' }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {faq.question}
                </Typography>
                
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{ 
            py: 8, 
            textAlign: 'center',
            maxWidth: 700,
            mx: 'auto'
          }}
        >
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            Ready to Start Your Fitness Journey?
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ mb: 4 }}
          >
            Join thousands of Indians who have transformed their lives with FitNest. 
            Start your free trial today and experience the difference with our India-specific workouts and nutrition plans.
          </Typography>
          
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="primary"
            size="large"
            sx={{ py: 1.5, px: 4 }}
          >
            Start Your Free Trial
          </Button>
        </Box>
      </Container>
      
      {/* Floating Back Button */}
      <FloatingBackButton backPath="/" />
    </Box>
  );
};

export default PricingPage;
