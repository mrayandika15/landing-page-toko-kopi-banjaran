import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { breakpoints } from "./foundations/breakpoints";
import { Button } from "./components/Button";
import { fonts } from "./foundations/font";
import { colormode } from "./foundations/colormode";

const overrides = {
  fonts,
  colors,
  breakpoints,
  colormode,
  components: {
    Button,
  },
};

const theme = extendTheme(overrides);

export default theme;
