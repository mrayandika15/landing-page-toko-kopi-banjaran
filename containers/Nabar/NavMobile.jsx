import { Box, HStack, Link, useDisclosure, VStack } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Image } from "@chakra-ui/react";

import style from "./Navbar.module.css";
import Sidebar from "../Sidebar";

const NavMobile = ({ color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const iconColor = [];

  const imageSrc = [];

  if (color === "black") {
    iconColor.push(style.black);
    imageSrc.push("/assets/img/Logo_Black.png");
  }

  if (color === "white") {
    imageSrc.push("/assets/img/Logo.png");
    iconColor.push(style.white);
  }

  return (
    <HStack
      justify="space-between"
      h="16"
      visibility={["visible", "hidden"]}
      mt="20px"
      px="25px"
    >
      <Box cursor="pointer">
        <GiHamburgerMenu className={iconColor} onClick={onOpen} />
      </Box>

      <Box>
        <Image
          src={imageSrc}
          alt="logo"
          width="140px"
          height="auto"
          objectFit="contain"
        />
      </Box>

      <Box h="auto" w="10px" />
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};

export default NavMobile;
