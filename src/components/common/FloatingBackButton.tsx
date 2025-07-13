import React from 'react';
import {
  Fab,
  Zoom,
  useScrollTrigger,
  Box,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface FloatingBackButtonProps {
  backPath?: string;
  show?: boolean;
}

const FloatingBackButton: React.FC<FloatingBackButtonProps> = ({ 
  backPath,
  show = true 
}) => {
  const navigate = useNavigate();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleBack = () => {
    if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  return (
    <Zoom in={show && trigger}>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 },
          left: { xs: 16, sm: 24 },
          zIndex: 1000,
        }}
      >
        <Fab
          color="primary"
          size="medium"
          onClick={handleBack}
          sx={{
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
            }
          }}
        >
          <ArrowBackIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default FloatingBackButton;
