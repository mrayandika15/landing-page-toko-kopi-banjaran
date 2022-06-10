import { Box, Flex, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import style from "./CustomCarousel.module.css";
const CustomCarousel = ({ resource }) => {
  return (
    <Flex h={["450px", "fit-content"]} w={["auto", "full"]} position="relative">
      <Image
        src="assets/img/UI/BG_MobilePromo.png"
        position="absolute"
        w="full"
        h="full"
        display={["block", "none"]}
      />
      <Image
        src="/assets/img/UI/Thumbnail_Desktop.png"
        w="full"
        h="full"
        position="absolute"
        display={["none", "block"]}
      />
      <Carousel
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        stopOnHover
        dynamicHeight={false}
        className={style.carousel__wrapper}
        interval="2000"
      >
        {resource.map((data, index) => (
          <Flex w="full" h="450px" justifyContent="center" alignItems="center">
            <Box
              width={["350px", "900px"]}
              height={["250px", "300px"]}
              bgImage={[data?.imageMobile, data?.image]}
              bgSize="contain"
              mt={["0px", "45px"]}
              cursor="pointer"
              key={index}
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=6281214636060&text&app_absent=0"
                )
              }
            ></Box>
          </Flex>
        ))}
      </Carousel>
    </Flex>
  );
};

export default CustomCarousel;
