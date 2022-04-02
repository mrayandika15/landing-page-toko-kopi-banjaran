import { Box, HStack, Link, useDisclosure, VStack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Image } from "@chakra-ui/react";

import style from "./Navbar.module.css";
import Sidebar from "../Sidebar";

const NavMobile = ({ color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const iconColor = [];

  if (color === "black") {
    iconColor.push(style.black);
  }

  if (color === "white") {
    iconColor.push(style.white);
  }

  return (
    <HStack
      justify="space-between"
      px="12"
      h="16"
      visibility={["visible", "hidden"]}
    >
      <Box cursor="pointer">
        <GiHamburgerMenu className={iconColor} onClick={onOpen} />
      </Box>

      <Box>
        <Image
          src="/assets/img/Logo.png"
          alt="logo"
          width="166px"
          height="43px"
          objectFit="contain"
        />
      </Box>

      <Box />
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default NavMobile;
