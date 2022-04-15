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
            fontSize={["xl", "5xl"]}
            fontWeight="bold"
            align={["left"]}
            w={["full", "auto"]}
          >
            Selamat Datang <br />
            Di Toko Kopi Banjaran
          </Text>
          <Text align={["center", "start"]} fontStyle="italic">
            {resource?.subHeader}
          </Text>
          <Flex
            direction={["column", "row"]}
            gap="6px"
            flexWrap="wrap"
            alignItems={["center", "start"]}
            w={["full", "auto"]}
          >
            {resource?.socialMedias.map((data, index) => {
              return (
                <Button
                  _hover={{ background: data.color, color: "white" }}
                  key={index}
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
