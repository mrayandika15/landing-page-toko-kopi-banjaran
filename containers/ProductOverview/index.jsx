import { Button, Flex, Image, SlideFade, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ProductName } from "../../components";
import ToggleButton from "../../components/ToggleButton";
import { ProductData } from "./ProductData";

import { Element } from "react-scroll";

import { useRouter } from "next/router";

const ProductOverview = () => {
  const [ProductActive, setProductActive] = useState({
    ProductBjrActive: true,
    ProductCapKretekActive: false,
  });

  const ProductBJR = ProductData[0];

  const ProductCapKretek = ProductData[1];

  const router = useRouter();

  const handleClickDetail = () => {
    if (ProductActive.ProductBjrActive === true) {
      router.push("/product-bjr");
    }

    if (ProductActive.ProductCapKretekActive === true) {
      router.push("/product-cap-kretek");
    }
  };

  return (
    <Element id="product" name="product">
      <Flex
        direction="column"
        justify={["center", "center"]}
        alignItems={["center", "center"]}
        px="20px"
      >
        <Text fontSize={["30"]} textDecoration="underline" fontWeight="bold">
          Produk Kami
        </Text>

        <ToggleButton
          setActive={(active) => setProductActive(active)}
          Active={ProductActive}
        />

        <Flex
          direction={["column", "row"]}
          alignItems="center"
          justify={["center", "center"]}
          py={["15px"]}
          gap={["5px", "50px"]}
        >
          <Flex>
            {ProductActive.ProductBjrActive && (
              <SlideFade in={ProductActive.ProductBjrActive}>
                <Image
                  objectFit="contain"
                  src={ProductBJR.img}
                  alt="Logo Bjr"
                  w={["175.62px", "293px"]}
                  h={["292px", "551px"]}
                />
              </SlideFade>
            )}

            {ProductActive.ProductCapKretekActive && (
              <SlideFade in={ProductActive.ProductCapKretekActive}>
                <Image
                  objectFit="contain"
                  src={ProductCapKretek.img}
                  alt="Logo Bjr"
                  w={["175.62px", "293px"]}
                  h={["292px", "551px"]}
                />
              </SlideFade>
            )}
          </Flex>

          <Flex
            direction="column"
            alignItems={["center", "flex-start"]}
            gap="5px"
          >
            {ProductActive.ProductBjrActive && (
              <SlideFade in={ProductActive.ProductBjrActive}>
                <Image
                  objectFit="contain"
                  src={ProductBJR.logo}
                  alt="Logo Bjr"
                  w="331px"
                  h="110px"
                />
              </SlideFade>
            )}

            {ProductActive.ProductCapKretekActive && (
              <SlideFade in={ProductActive.ProductCapKretekActive}>
                <Image
                  objectFit="contain"
                  src={ProductCapKretek.logo}
                  alt="Logo Bjr"
                  w="331px"
                  h="110px"
                />
              </SlideFade>
            )}

            {ProductActive.ProductBjrActive && (
              <SlideFade in={ProductActive.ProductBjrActive}>
                <ProductName
                  name={ProductBJR.name}
                  variant={ProductBJR.varian}
                />
              </SlideFade>
            )}

            {ProductActive.ProductCapKretekActive && (
              <SlideFade in={ProductActive.ProductCapKretekActive}>
                <ProductName
                  name={ProductCapKretek.name}
                  variant={ProductCapKretek.varian}
                />
              </SlideFade>
            )}

            {ProductActive.ProductBjrActive && (
              <SlideFade in={ProductActive.ProductBjrActive}>
                <Text
                  fontSize={["sm", "md"]}
                  align="justify"
                  w={["full", "550px"]}
                >
                  {ProductBJR.desc}
                </Text>
              </SlideFade>
            )}

            {ProductActive.ProductCapKretekActive && (
              <SlideFade in={ProductActive.ProductCapKretekActive}>
                <Text
                  fontSize={["sm", "md"]}
                  align="justify"
                  w={["full", "550px"]}
                >
                  {ProductCapKretek.desc}
                </Text>
              </SlideFade>
            )}

            <Flex justify={["flex-end", "flex-start"]} w="full" py="20px">
              <Button onClick={handleClickDetail} variant="primary" isActive>
                Selegkapnya
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Element>
  );
};

export default ProductOverview;
