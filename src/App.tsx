import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: 0,
      },
      mutations: {
        onError: error => {
          console.log(error);
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
}
