import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "./app/store";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Provider store={store}>
          <GlobalStyle />
          <Router />
        </Provider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
