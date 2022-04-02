import { Flex, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ resource }) => {
  return (
    <Flex h={["186px", "fit-content"]} w="full" bg="black" position="relative">
      <Carousel
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        width="full"
        autoPlay
        stopOnHover
        dynamicHeight={false}
      >
        {resource.map((slider, index) => (
          <Image
            w="full"
            h={["186px", "fit-content"]}
            src={slider.image}
            key={index}
          />
        ))}
      </Carousel>
    </Flex>
  );
};

export default CustomCarousel;
