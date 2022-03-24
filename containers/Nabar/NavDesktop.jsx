import { Center, Flex, HStack, Image, Link } from "@chakra-ui/react";

const NavDesktop = () => {
  return (
    <Center
      w="full"
      h="full"
      position="absolute"
      visibility={["hidden", "visible"]}
    >
      <Flex w="880px" h="full" justify="space-between" position="relative">
        <HStack color="white" gap="2">
          <Link>Tentang Kami</Link>
          <Link>Produk Kami</Link>
        </HStack>

        <HStack color="white" gap="2">
          <Link>Lokasi Toko</Link>
          <Link>Promo</Link>
        </HStack>

        <Image
          src="/assets/img/Logo.png"
          position="absolute"
          w="316px"
          h="81px"
          left="0"
          right="0"
          margin="auto"
        />
      </Flex>
    </Center>
  );
};

export default NavDesktop;
