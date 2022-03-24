import {
  Center,
  Divider,
  Flex,
  StackDivider,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

import { AiOutlineInstagram } from "react-icons/ai";

import { BsWhatsapp } from "react-icons/bs";

import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <Flex w="full" h="fit-content" direction="column">
      <Center w="full">
        <Divider w={["full", "450px"]} variant="solid" />
      </Center>

      <Flex direction={["column", "row"]} w="full" h="fit-content" p="4">
        <Flex direction={["row", "column"]} gap="2">
          <Image
            src="/assets/img/Logo_Black_Mobile.png"
            w="91px"
            h="91px"
            display={["flex", "none"]}
          />
          <Image
            src="/assets/img/Logo_Black.png"
            w="341.44px"
            h="113.66px"
            display={["none", "flex"]}
          />

          <Text fontSize={["15.42", "15.83"]} w="341.44px" textAlign="justify">
            Jalan Babakan Stasion No. 2 Banjaran, Kecamatan Banjaran, Kabupaten
            Bandung, Jawa Barat 40377, Indonesia
          </Text>
        </Flex>

        <Flex direction="row" justifyContent="space-between" w="full">
          <Flex
            direction="row"
            gap={["6px", "100px"]}
            mt="4"
            w="full"
            justify={["flex-start", "center"]}
          >
            <Flex direction="column">
              <Text fontSize={["14.63", "22.43"]} fontWeight="semibold">
                Explore
              </Text>
              <Link fontSize={["10.97", "13.83"]} textDecoration="underline">
                Tentang Kami
              </Link>
              <Link fontSize={["10.97", "13.83"]} textDecoration="underline">
                Promo
              </Link>
            </Flex>
            <Flex direction="column">
              <Text fontSize={["14.63", "22.43"]} fontWeight="semibold">
                Toko
              </Text>
              <Link fontSize={["10.97", "13.83"]} textDecoration="underline">
                Produk
              </Link>
              <Link fontSize={["10.97", "13.83"]} textDecoration="underline">
                Lokasi Toko
              </Link>
            </Flex>
          </Flex>

          <Flex direction="column" mt="4" w="full">
            <Text fontSize={["14.63", "22.43"]} fontWeight="semibold">
              Temukan Kami
            </Text>
            <Flex gap="2" mt="2">
              <AiOutlineInstagram />
              <BsWhatsapp />
              <GoLocation />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
