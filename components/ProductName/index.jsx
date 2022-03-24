import { Flex, Text } from "@chakra-ui/react";

const ProductName = ({ name, variant }) => {
  return (
    <Flex direction="row" gap="10px" alignItems="center">
      <Text fontSize={["29.57"]} fontWeight="semibold">
        {name}
      </Text>
      <Text fontSize={["32.42"]}>|</Text>
      <Text fontSize={["23.18"]} fontWeight="semibold">
        {variant}
      </Text>
    </Flex>
  );
};

export default ProductName;
