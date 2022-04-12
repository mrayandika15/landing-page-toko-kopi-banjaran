import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { breakpoints } from "./foundations/breakpoints";
import { Button } from "./components/Button";

const overrides = {
  colors,
  breakpoints,
  components: {
    Button,
  },
};

const theme = extendTheme(overrides);

export default theme;
