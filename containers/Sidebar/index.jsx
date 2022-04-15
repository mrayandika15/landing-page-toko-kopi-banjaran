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

import NextLink from "next/link";

import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

import { HiOutlineLocationMarker } from "react-icons/hi";

const Sidebar = ({ isOpen, onClose }) => {
  const LinkData = [
    {
      name: "Tentang Kami",
      link: "/#about",
    },
    {
      name: "Produk Kami",
      link: "/#product",
    },
    {
      name: "Lokasi Toko",
      link: "/#location",
    },
    {
      name: "Promo",
      link: "/promo",
    },
  ];

  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="full">
      <DrawerContent bgImg="/assets/img/UI/BG_MobileNavigation.png">
        <DrawerCloseButton color="white" />
        <DrawerBody display="flex" alignItems="center">
          <Flex direction="column" gap="5">
            {LinkData.map((item, index) => (
              <NextLink href={item.link} key={index}>
                <Link
                  href="#"
                  color="white"
                  fontSize="4xl"
                  fontWeight="bold"
                  _hover={{ borderBottom: "1px solid white" }}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              </NextLink>
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
              <IoLogoInstagram />
              <IoLogoWhatsapp />
              <HiOutlineLocationMarker />
            </Flex>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
