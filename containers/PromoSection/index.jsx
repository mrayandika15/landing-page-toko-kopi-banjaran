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
        <Image src={resource?.image} display={["none", "block"]} />
        <VStack align="start" justify="center">
          <Text
            fontSize={["xl", "2xl"]}
            fontWeight="semibold"
            align={["center"]}
            w={["full", "auto"]}
          >
            {resource?.header}
          </Text>
          <Text align={["center", "start"]}>{resource?.subHeader}</Text>
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
