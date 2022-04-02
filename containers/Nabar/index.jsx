import { Stack } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Navbar = ({ color, isHomePage }) => {
  return (
    <Stack w="full" h="12" position="absolute" zIndex="banner">
      <NavMobile color={color} />
      <NavDesktop color={color} isHomePage={isHomePage} />
    </Stack>
  );
};

export default Navbar;
