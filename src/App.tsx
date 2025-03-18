import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from '@navigation/AppNavigator';
import ToastProvider from '@contexts/ToastContext';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: 0,
      },
      mutations: {
        onError: (error) => {
          console.log(error);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <AppNavigator />
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
