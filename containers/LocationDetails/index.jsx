import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

import { LocationData } from "./LocationData";

import { Element } from "react-scroll";
import { Image, Img } from "@chakra-ui/react";

const LocationDetails = () => {
  return (
    <Element id="location" name="location">
      <Image
        src="/assets/img/UI/BG.png"
        position="absolute"
        zIndex="hide"
        height="1100px"
      />
      <DesktopView resource={LocationData} />
      <MobileView resource={LocationData} />
    </Element>
  );
};

export default LocationDetails;
