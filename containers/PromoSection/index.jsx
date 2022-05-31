import { Button, Flex, Image, VStack, Text } from "@chakra-ui/react";

const PromoSection = ({ resource }) => {
  return (
    <Flex w="full" h="full" justify="center" py="45px">
      <Flex
        direction={["column", "row"]}
        gap="35px"
        alignContent={["center", "start"]}
        w={["full", "1020px"]}
      >
        <Image
          src={resource?.image}
          display={["none", "block"]}
          w="420px"
          h="auto"
        />
        <VStack align="start" justify="center">
          <Text
            fontSize={["4xl", "5xl"]}
            fontWeight="bold"
            align={["center", "left"]}
            w={["full", "auto"]}
          >
            Selamat Datang <br />
            Di Toko Kopi Banjaran
          </Text>
          <Text
            align={["center", "start"]}
            fontStyle="italic"
            w={["full", "auto"]}
            pb="25px"
            display={["block", "none"]}
          >
            Silahkan pesan produk kami <br /> melalui beberapa platform di bawah
            ini
          </Text>
          <Text
            align={["center", "start"]}
            fontStyle="italic"
            w={["full", "auto"]}
            pb="25px"
            display={["none", "block"]}
          >
            Silahkan pesan produk kami melalui beberapa platform di bawah ini
          </Text>
          <Flex
            direction={["column", "row"]}
            gap={["25px", "6px"]}
            flexWrap="wrap"
            alignItems={["center", "start"]}
            w={["full", "auto"]}
          >
            {resource?.socialMedias.map((data, index) => {
              return (
                <Button
                  _hover={{ background: data.color, color: "white" }}
                  key={index}
                  w={["120px", "auto"]}
                  onClick={() => window.open(data.link)}
                >
                  {data.name}
                </Button>
              );
            })}
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default PromoSection;
