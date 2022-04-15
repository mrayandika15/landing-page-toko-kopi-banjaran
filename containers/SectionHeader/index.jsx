import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";

const SectionHeader = () => {
  return (
    <Element id="about" name="about">
      <Flex justify="center" w="full" mt="20px" mb={["0px", "60px"]}>
        <Box
          w={["full", "1667px"]}
          h="fit-content"
          display="flex"
          flexDirection={["column", "row"]}
          p="3"
          gap="2"
          bg="white"
        >
          <Flex
            w={["full", "fit-content"]}
            justifyContent={["center", "start"]}
          >
            <Image
              src="/assets/img/LogoWithoutImage.png"
              w={["209px", "700px"]}
              h={["61px", "auto"]}
              display={["none", "block"]}
            />
            <Image
              src="/assets/img/UI/Logo_Lettermark_Center-01.png"
              w={["320px"]}
              h={"auto"}
              display={["block", "none"]}
            />
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            h={["330px", "full"]}
            w="full"
            mt={["0", "5px"]}
          >
            <Text
              fontSize={["lg", "lg"]}
              pt={["0", "5px"]}
              textAlign={["center", "left"]}
              width="full"
              h={["330px", "fit-content"]}
              mt={["70px", "0px"]}
            >
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
