import {
  Button,
  Flex,
  Image,
  VStack,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import NextLink from "next/link";

import { IoArrowForward } from "react-icons/io5";

const ProductDetails = ({
  image,
  altImage,
  header,
  resource,
  whatNext,
  whatNextSrc,
}) => {
  const [indexArray, setIndexArray] = useState(0);

  const handleClick = (values) => {
    setIndexArray(values);
  };

  const router = useRouter();

  return (
    <Center w="full" py={["100px", "150px"]}>
      <Flex
        direction={["column", "row"]}
        gap="25px"
        w={["full", "890px"]}
        px={["15px", "0px"]}
        position="relative"
      >
        <Flex
          position="absolute"
          right={["15px", "-100px"]}
          top={["-50px", "0px"]}
          align="center"
          fontSize="md"
          textDecoration="underline"
          fontWeight="bold"
          gap="2px"
        >
          <NextLink href={whatNextSrc} passHref>
            <Link>{whatNext}</Link>
          </NextLink>
          <IoArrowForward />
        </Flex>

        <Center>
          <Image src={image} alt={altImage} w={["350px", "910px"]} h="auto" />
        </Center>
        <VStack spacing={["15px", "12px"]} align="start">
          <Text
            fontSize={["3xl", "4xl"]}
            fontWeight="bold"
            textDecoration="underline"
            pl="5px"
          >
            {header}
          </Text>
          <Flex gap="5px" flexWrap="wrap" w="350px">
            {resource?.map((data, index) => {
              return (
                <Button
                  onClick={() => handleClick(index)}
                  isActive={index === indexArray}
                >
                  {data.type}
                </Button>
              );
            })}
          </Flex>
          <Text fontSize={["xl", "2xl"]} fontWeight="semibold" pl="5px">
            {resource[indexArray]?.nameDetail}
          </Text>
          <Text pl="5px">{resource[indexArray]?.detailProduct}</Text>
          <Button>Beli Produk ini</Button>
        </VStack>
      </Flex>
    </Center>
  );
};

export default ProductDetails;
