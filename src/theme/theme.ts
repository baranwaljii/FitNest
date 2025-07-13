import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';

interface CustomThemeOptions extends ThemeOptions {
  isDarkMode?: boolean;
  isLargeFont?: boolean;
}

export const createAppTheme = (options: CustomThemeOptions): Theme => {
  const { isDarkMode = false, isLargeFont = false } = options;
  
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#6C5CE7', // Modern purple
        light: '#A29BFE',
        dark: '#5F3DC4',
        contrastText: '#fff',
      },
      secondary: {
        main: '#00D2D3', // Vibrant cyan
        light: '#55EFC4',
        dark: '#00B894',
        contrastText: '#fff',
      },
      background: {
        default: isDarkMode ? '#1A1A2E' : '#FFFFFF',
        paper: isDarkMode ? '#16213E' : '#FFFFFF',
      },
      error: {
        main: '#FF6B6B',
        light: '#FF8E8E',
        dark: '#EE5A24',
      },
      warning: {
        main: '#FFA726',
        light: '#FFCC02',
        dark: '#FF9F43',
      },
      info: {
        main: '#00D2D3',
        light: '#74B9FF',
        dark: '#0984E3',
      },
      success: {
        main: '#00B894',
        light: '#55EFC4',
        dark: '#00A085',
      },
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#2D3436',
        secondary: isDarkMode ? '#B2BEC3' : '#636E72',
      },
    },
    typography: {
      fontFamily: '"Inter", "Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: isLargeFont ? 16 : 14,
      h1: {
        fontSize: isLargeFont ? '3.2rem' : '2.8rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #6C5CE7 0%, #00D2D3 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },
      h2: {
        fontSize: isLargeFont ? '2.6rem' : '2.3rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: isLargeFont ? '2.2rem' : '2rem',
        fontWeight: 600,
      },
      h4: {
        fontSize: isLargeFont ? '2rem' : '1.8rem',
        fontWeight: 500,
      },
      h5: {
        fontSize: isLargeFont ? '1.8rem' : '1.6rem',
        fontWeight: 500,
      },
      h6: {
        fontSize: isLargeFont ? '1.6rem' : '1.4rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: isLargeFont ? '1.2rem' : '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: isLargeFont ? '1.0rem' : '0.875rem',
      },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '10px 24px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
            },
          },
          containedPrimary: {
            background: 'linear-gradient(45deg, #4CAF50 30%, #80E27E 90%)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: 12,
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
};

// Default themes
export const lightTheme = createAppTheme({ isDarkMode: false, isLargeFont: false });
export const darkTheme = createAppTheme({ isDarkMode: true, isLargeFont: false });
export const lightThemeLargeFont = createAppTheme({ isDarkMode: false, isLargeFont: true });
export const darkThemeLargeFont = createAppTheme({ isDarkMode: true, isLargeFont: true });
