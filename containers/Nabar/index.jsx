import { Stack } from "@chakra-ui/react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Navbar = ({ color, isHomePage, playing, show }) => {
  return (
    <Stack w="full" h="12" position="absolute" zIndex="banner">
      <NavMobile color={color} />
      <NavDesktop
        color={color}
        isHomePage={isHomePage}
        playing={playing}
        show={show}
      />
    </Stack>
  );
};

export default Navbar;
