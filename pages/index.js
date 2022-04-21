import {
  LocationDetails,
  ProductOverview,
  SectionHeader,
  Video,
} from "../containers";
import { Main } from "../layouts";

import { useState, useEffect } from "react";

const index = () => {
  const [playing, setPlaying] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (playing) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [playing]);

  return (
    <Main navbarColor="white" isHomePage playing={playing} navShow={show}>
      <Video
        setPlaying={(set) => setPlaying(set)}
        playing={playing}
        setShow={(set) => setShow(set)}
      />
      <SectionHeader />
      <ProductOverview />
      <LocationDetails />
    </Main>
  );
};

export default index;
