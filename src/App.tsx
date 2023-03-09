import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";

const App = () => {
  return (
    <Box minHeight="calc(100vh)">
      <Header />
      <Outlet />
    </Box>
  );
};
export default App;
