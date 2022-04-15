import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

const SectionHeader = () => {
  return (
    <Element id="about" name="about">
      <Flex justify="center" w="full" mt="20px" mb="60px">
        <Box
          w={["full", "1667px"]}
          h="fit-content"
          display="flex"
          flexDirection={["column", "row"]}
          p="3"
          gap="2"
          bg="white"
        >
          <Image
            src="/assets/img/LogoWithoutImage.png"
            w={["209px", "514px"]}
            h={["61px", "134px"]}
          />

          <Flex justify={"center"} direction="column" h={["350px", "134px"]}>
            <Text fontSize={["lg", "xl"]} pt={["0", "5px"]}>
              Toko Kopi Banjaran adalah sebuah toko kopi yang menyediakan ruang
              Toko Kopi Banjaran adalah sebuah toko kopi yang menyediakan ruang
              edukasi dan ruang interaksi dalam industri kopi di Kabupaten
              Bandung. Kami menyediakan beragam biji dan bubuk kopi dengan nama
              Kopi BJR dan Kopi Cap Kretek. Selain itu, kami pun menyediakan
              produk minuman kopi untuk dinikmati di tempat serta peralatan
              seduh kopi rumahan.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Element>
  );
};

export default SectionHeader;
