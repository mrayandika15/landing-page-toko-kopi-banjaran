import { Center, Flex, HStack, Image } from "@chakra-ui/react";
import NextLink from "next/link";

import { useRouter } from "next/router";

import style from "./Navbar.module.css";

import { Link, animateScroll } from "react-scroll";

const NavDesktop = ({ color, isHomePage }) => {
  const logo = [];
  const TextColor = [];

  const router = useRouter();

  if (color === "white") {
    logo.push("/assets/img/Logo.png");
    TextColor.push("white");
  }

  if (color === "black") {
    logo.push("/assets/img/Logo_Black.png");
    TextColor.push("black");
  }

  return (
    <Center
      w="full"
      h="full"
      position="absolute"
      visibility={["hidden", "visible"]}
    >
      <Flex w="880px" h="full" justify="space-between" position="relative">
        <HStack color={TextColor} gap="5" mt="31px" ml="32px">
          {isHomePage && (
            <>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={style.link}
                to="about"
              >
                Tentang Kami
              </Link>

              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={style.link}
                to="product"
              >
                Produk Kami
              </Link>
            </>
          )}

          {!isHomePage && (
            <>
              <NextLink href="/#about">
                <a className={style.link}>Tentang Kami</a>
              </NextLink>
              <NextLink href="/#product">
                <a className={style.link}>Produk Kami</a>
              </NextLink>
            </>
          )}
        </HStack>

        <HStack color={TextColor} gap="5" mt="31px" mr="78px">
          {isHomePage && (
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={style.link}
              to="location"
            >
              Lokasi Toko
            </Link>
          )}

          {!isHomePage && (
            <NextLink href="/#location">
              <a className={style.link}>Lokasi Toko</a>
            </NextLink>
          )}

          <NextLink href="/promo">
            <Link className={style.link}>Promo</Link>
          </NextLink>
        </HStack>

        <Image
          src={logo}
          position="absolute"
          w="250px"
          h="auto"
          left="0"
          right="0"
          top="5px"
          margin="auto"
          cursor={"pointer"}
          onClick={() => router.push("/")}
        />
      </Flex>
    </Center>
  );
};

export default NavDesktop;
