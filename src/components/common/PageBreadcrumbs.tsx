import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Container,
} from '@mui/material';
import {
  Home as HomeIcon,
  NavigateNext as NavigateNextIcon,
} from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

interface PageBreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
}

const PageBreadcrumbs: React.FC<PageBreadcrumbsProps> = ({ 
  items = [], 
  showHome = true 
}) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs based on current path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter(x => x);
    
    const breadcrumbs: BreadcrumbItem[] = [];
    
    if (showHome) {
      breadcrumbs.push({ label: 'Home', path: '/', icon: <HomeIcon fontSize="small" /> });
    }
    
    pathnames.forEach((pathname, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      
      if (index === pathnames.length - 1) {
        // Last item (current page) - no link
        breadcrumbs.push({ label });
      } else {
        breadcrumbs.push({ label, path });
      }
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs if there's only one item or less
  }

  return (
    <Box sx={{ py: 2, bgcolor: 'background.default', borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            if (isLast || !item.path) {
              return (
                <Typography 
                  key={index}
                  color="text.primary" 
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  {item.icon}
                  {item.label}
                </Typography>
              );
            }
            
            return (
              <Link
                key={index}
                component={RouterLink}
                to={item.path}
                color="inherit"
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default PageBreadcrumbs;
