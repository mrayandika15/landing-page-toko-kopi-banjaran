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
    <Center w="full" pt={["120px", "150px"]} pb={["50px", "50px"]}>
      <Flex
        direction={["column", "row"]}
        gap="25px"
        w={["full", "1000px"]}
        px={["15px", "0px"]}
        position="relative"
        flexGrow={0}
        flexShrink={0}
      >
        <Flex
          position="absolute"
          right={["15px", "30px"]}
          top={["-50px", "25px"]}
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
          <Image
            src={image}
            alt={altImage}
            w={["180px", "399.72px"]}
            h="auto"
            flexGrow={0}
            flexShrink={0}
          />
        </Center>
        <VStack
          spacing={["15px", "12px"]}
          align="start"
          flexGrow="0"
          width={["auto", "1000px"]}
          justify={["start", "center"]}
        >
          <Text
            fontSize={["4xl", "4xl"]}
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
                  variant="secondary"
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
          <Button
            variant="primary"
            isActive
            onClick={() => router.push("/beliproduk")}
          >
            Beli Produk ini
          </Button>
        </VStack>
      </Flex>
    </Center>
  );
};

export default ProductDetails;
