import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from '@navigation/AppNavigator';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import { useToastStore } from '@stores/useToastStore';

export default function App() {
  const { error } = useToastStore();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: 0,
      },
      mutations: {
        onError: (err) => {
          error(err.message);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
