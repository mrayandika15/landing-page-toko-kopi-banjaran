import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

import { LocationData } from "./LocationData";

import { Element } from "react-scroll";

const LocationDetails = () => {
  return (
    <Element id="location" name="location">
      <DesktopView resource={LocationData} />
      <MobileView resource={LocationData} />
    </Element>
  );
};

export default LocationDetails;
