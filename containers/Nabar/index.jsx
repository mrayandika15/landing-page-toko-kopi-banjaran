import { Stack } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Navbar = () => {
  return (
    <Stack w="full" h="12" position="absolute">
      <NavMobile />
      <NavDesktop />
    </Stack>
  );
};

export default Navbar;
