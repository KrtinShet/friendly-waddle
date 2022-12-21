import React, { useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import AppLayout from './AppLayout';

const storedMode = localStorage.getItem('Chai_UI_Mode')
  ? localStorage.getItem('Chai_UI_Mode')
  : 'dark';

function App() {
  const [mode, setMode] = useState(storedMode);

  const toggleMode = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    localStorage.setItem('Chai_UI_Mode', nextMode);
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: '#2382F7',
          },
          secondary: {
            main: mode === 'dark' ? '#222E58' : '#EDF7FF',
          },
          info: {
            main: '#1749C6',
          },
          success: {
            main: mode === 'dark' ? '#60CEC9' : '#38B781',
          },
          warning: {
            main: '#FF8812',
          },
          error: {
            main: '#EB5757',
          },
          white: {
            main: '#fff',
          },
          grey: {
            1: '#333333',
            2: '#4f4f4f',
            3: '#828282',
            4: '#bdbdbd',
            5: '#e0e0e0',
          },
          neutral: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          },
          background: {
            default: mode === 'dark' ? '#111936' : '#fff',
            paper: mode === 'dark' ? '#212946' : '#fff',
          },
        },
        typography: {
          fontFamily: 'Inter',
          fontWeightSemiBold: 600,
          d2xlReg: {
            fontFamily: 'Inter',
            fontSize: '4.5rem',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: '5.525rem',
          },
          d2xlMed: {
            fontFamily: 'Inter',
            fontSize: '4.5rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '5.525rem',
          },
          d2xlSmbd: {
            fontFamily: 'Inter',
            fontSize: '4.5rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '5.525rem',
          },
          d2xlBd: {
            fontFamily: 'Inter',
            fontSize: '4.5rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '5.525rem',
          },
          dxlReg: {
            fontFamily: 'Inter',
            fontSize: '3.75rem',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: '4.625',
          },
          dxlMed: {
            fontFamily: 'Inter',
            fontSize: '3.75rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '4.625',
          },
          dxlSmbd: {
            fontFamily: 'Inter',
            fontSize: '3.75rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '4.625',
          },
          dxlBd: {
            fontFamily: 'Inter',
            fontSize: '3.75rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '4.625',
          },
          dlgReg: {
            fontFamily: 'Inter',
            fontSize: '3rem',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: '3.75rem',
          },
          dlgMed: {
            fontFamily: 'Inter',
            fontSize: '3rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '3.75rem',
          },
          dlgSmbd: {
            fontFamily: 'Inter',
            fontSize: '3rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '3.75rem',
          },
          dlgBd: {
            fontFamily: 'Inter',
            fontSize: '3rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '3.75rem',
          },
          dmdReg: {
            fontFamily: 'Inter',
            fontSize: '2.25rem',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: '2.75rem',
          },
          dmdMed: {
            fontFamily: 'Inter',
            fontSize: '2.25rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '2.75rem',
          },
          dmdSmbd: {
            fontFamily: 'Inter',
            fontSize: '2.25rem',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: '2.75rem',
          },
          dmdBd: {
            fontFamily: 'Inter',
            fontSize: '2.25rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '2.75rem',
          },
          dsmReg: {
            fontFamily: 'Inter',
            fontSize: '1.875rem',
            fontWeight: 400,
            lineHeight: '2.375',
          },
          dsmMed: {
            fontFamily: 'Inter',
            fontSize: '1.875rem',
            fontWeight: 500,
            lineHeight: '2.375',
          },
          dsmSmbd: {
            fontFamily: 'Inter',
            fontSize: '1.875rem',
            fontWeight: 600,
            lineHeight: '2.375',
          },
          dSmBd: {
            fontFamily: 'Inter',
            fontSize: '1.875rem',
            fontWeight: 700,
            lineHeight: '2.375',
          },
          dssReg: {
            fontFamily: 'Inter',
            fontSize: '1.625rem',
            fontWeight: 400,
            lineHeight: '2.375rem',
          },
          dssMed: {
            fontFamily: 'Inter',
            fontSize: '1.625rem',
            fontWeight: 500,
            lineHeight: '2.375rem',
          },
          dssSmbd: {
            fontFamily: 'Inter',
            fontSize: '1.625rem',
            fontWeight: 600,
            lineHeight: '2.375rem',
          },
          dssBd: {
            fontFamily: 'Inter',
            fontSize: '1.625rem',
            fontWeight: 700,
            lineHeight: '2.375rem',
          },
          dxsReg: {
            fontFamily: 'Inter',
            fontSize: '1.5rem',
            fontWeight: 400,
            lineHeight: '2rem',
          },
          dxsMed: {
            fontFamily: 'Inter',
            fontSize: '1.5rem',
            fontWeight: 500,
            lineHeight: '2rem',
          },
          dxsSmbd: {
            fontFamily: 'Inter',
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: '2rem',
          },
          dxsBd: {
            fontFamily: 'Inter',
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: '2rem',
          },
          txlReg: {
            fontFamily: 'Inter',
            fontSize: '1.25rem',
            fontWeight: 400,
            lineHeight: '1.875rem',
          },
          txlMed: {
            fontFamily: 'Inter',
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: '1.875rem',
          },
          txlSmbd: {
            fontFamily: 'Inter',
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: '1.875rem',
          },
          txlBd: {
            fontFamily: 'Inter',
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: '1.875rem',
          },
          tlgReg: {
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: '1.75rem',
          },
          tlgMed: {
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: '1.75rem',
          },
          tlgSmbd: {
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: '1.75rem',
          },
          tlgBd: {
            fontFamily: 'Inter',
            fontSize: '1.125rem',
            fontWeight: 700,
            lineHeight: '1.75rem',
          },
          tmdReg: {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1.5rem',
          },
          tmdMed: {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: '1.5rem',
          },
          tmdSmbd: {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
          },
          tmdBd: {
            fontFamily: 'Inter',
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: '1.5rem',
          },
          tsmReg: {
            fontFamily: 'Inter',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.25rem',
          },
          tsmMed: {
            fontFamily: 'Inter',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
          tsmSmbd: {
            fontFamily: 'Inter',
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: '1.25rem',
          },
          tSmBd: {
            fontFamily: 'Inter',
            fontSize: '0.875rem',
            fontWeight: 700,
            lineHeight: '1.25rem',
          },
          txsReg: {
            fontFamily: 'Inter',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1.125rem',
          },
          txsMed: {
            fontFamily: 'Inter',
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: '1.125rem',
          },
          txsSmbd: {
            fontFamily: 'Inter',
            fontSize: '0.75rem',
            fontWeight: 600,
            lineHeight: '1.125rem',
          },
          txsBd: {
            fontFamily: 'Inter',
            fontSize: '0.75rem',
            fontWeight: 700,
            lineHeight: '1.125rem',
          },
        },
        shape: {
          borderRadius: 10,
        },
        components: {
          MuiListItemButton: {
            styleOverrides: {
              root: ({ ownerState, theme }) => ({
                '&.Mui-selected': {
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    '.MuiListItemIcon-root': {},
                  },
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.white.main,

                  '.MuiListItemIcon-root': {
                    color: theme.palette.white.main,
                  },
                },
              }),
            },
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <AppLayout toggleMode={toggleMode} />
    </ThemeProvider>
  );
}

export default App;
