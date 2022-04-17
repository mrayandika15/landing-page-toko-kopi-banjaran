import { Box, Flex, Image } from "@chakra-ui/react";

import { animateScroll } from "react-scroll/modules";

const ButtonScrollTop = () => {
  const handleClick = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Box
      position="fixed"
      bg="black"
      width={["45px"]}
      height={["45px"]}
      bottom={["4", "6"]}
      right={["4", "10"]}
      cursor="pointer"
      onClick={handleClick}
      zIndex="popover"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image src="/assets/img/UI/Button_Go Up.svg" />
    </Box>
  );
};

export default ButtonScrollTop;
