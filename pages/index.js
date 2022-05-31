import {
  LocationDetails,
  ProductOverview,
  SectionHeader,
  Video,
} from "../containers";
import { Main } from "../layouts";

import { useState, useEffect } from "react";
import Head from "next/head";

const Index = () => {
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
      <Head>
        <title>Toko Kopi Banjaran | Oleh-oleh khas Banjaran</title>
      </Head>
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

export default Index;
