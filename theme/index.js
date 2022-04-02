import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#383938",
    secondary: "#FFFFF",
  },
  breakpoints: {
    sm: "1055px",
    md: "1056px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
