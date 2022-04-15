import {
  Center,
  Divider,
  Flex,
  StackDivider,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";

import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLocationOutline,
} from "react-icons/io5";

import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <Flex w="full" h="fit-content" direction="column">
      <Center w="full">
        <Flex w="full" mx={["25px", "45px"]} h="2px" bg="black" />
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
            display={["none", "flex"]}
            w="441.44px"
            h="auto"
          />

          <Text fontSize={["15.42", "15.83"]} w="341.44px">
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
              <Text fontSize={["14.63", "2xl"]} fontWeight="semibold">
                Explore
              </Text>
              <Link fontSize={["10.97", "lg"]}>Tentang Kami</Link>
              <Link fontSize={["10.97", "lg"]}>Promo</Link>
            </Flex>
            <Flex direction="column">
              <Text fontSize={["14.63", "2xl"]} fontWeight="semibold">
                Toko
              </Text>
              <Link fontSize={["10.97", "lg"]}>Produk</Link>
              <Link fontSize={["10.97", "lg"]}>Lokasi Toko</Link>
            </Flex>
          </Flex>

          <Flex direction="column" mt="4" w="full">
            <Text fontSize={["14.63", "2xl"]} fontWeight="semibold">
              Temukan Kami
            </Text>
            <Flex gap="2" mt="2">
              <IconContext.Provider value={{ size: "20px" }}>
                <IoLogoInstagram />
                <IoLogoWhatsapp />
                <HiOutlineLocationMarker />
              </IconContext.Provider>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
