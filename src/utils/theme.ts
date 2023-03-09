import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    point100: "#76E4F7",
    point200: "#086F83",
    main100: "#F7FAFC",
    main200: "#EDF2F7",
    main300: "#4A5568",
    main400: "#1A202C",
    white: "#FFFFFF",
  },
  sizes: {
    xs: "12px",
    s: "15px",
    m: "18px",
    lg: "20px",
    xl: "25px",
  },
});

export default theme;
