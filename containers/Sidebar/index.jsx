import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Link,
  DrawerFooter,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";

import { AiOutlineInstagram } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

import { GoLocation } from "react-icons/go";

const Sidebar = ({ isOpen, onClose }) => {
  const LinkData = [
    {
      name: "Tentang Kami",
    },
    {
      name: "Produk Kami",
    },
    {
      name: "Lokasi Toko",
    },
    {
      name: "Promo",
    },
  ];

  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="full">
      <DrawerContent bg="black">
        <DrawerCloseButton color="white" />
        <DrawerBody display="flex" alignItems="center">
          <Flex direction="column" gap="5">
            {LinkData.map((item, index) => (
              <Link
                key={index}
                href="#"
                color="white"
                fontSize="4xl"
                fontWeight="bold"
                _hover={{ borderBottom: "1px solid white" }}
              >
                {item.name}
              </Link>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Flex direction="column" gap="2">
            <Image
              src="/assets/img/Logo.png"
              alt="logo"
              objectFit="contain"
              width="200px"
            />

            <Box color="white" fontSize="xs">
              Jalan Babakan Stasion No. 2 Banjaran, Kecamatan Banjaran,
              Kabupaten Bandung, Jawa Barat 40377, Indonesia
            </Box>

            <Link
              color="white"
              fontSize="xs"
              _hover={{ textDecoration: "underline" }}
            >
              Temukan Kami
            </Link>

            <Flex color="white" gap="3" h="10" alignItems="center">
              <AiOutlineInstagram />
              <BsWhatsapp />
              <GoLocation />
            </Flex>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
