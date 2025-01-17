import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppNavigator from '@navigation/AppNavigator';
import ToastProvider from '@contexts/ToastContext';

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
      <ToastProvider>
        <AppNavigator />
      </ToastProvider>
    </QueryClientProvider>
  );
}
