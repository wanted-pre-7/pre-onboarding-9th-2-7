import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import Router from './router';

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Provider store={store}>
        <Router />
        <App />
      </Provider>
    </ChakraProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
