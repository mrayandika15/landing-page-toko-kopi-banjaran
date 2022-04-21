import {
  LocationDetails,
  ProductOverview,
  SectionHeader,
  Video,
} from "../containers";
import { Main } from "../layouts";

import { useState, useEffect } from "react";

const index = () => {
  const [playing, SetPlaying] = useState(false);

  const [show, SetShow] = useState(false);

  useEffect(() => {
    if (playing) {
      SetShow(false);
    } else {
      SetShow(true);
    }
  }, [playing]);

  return (
    <Main navbarColor="white" isHomePage playing={playing} navShow={show}>
      <Video
        setPlaying={(set) => SetPlaying(set)}
        playing={playing}
        setShow={(set) => SetShow(set)}
      />
      <SectionHeader />
      <ProductOverview />
      <LocationDetails />
    </Main>
  );
};

export default index;
