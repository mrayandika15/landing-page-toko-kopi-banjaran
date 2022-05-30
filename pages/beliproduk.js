import { CustomCarousel, PromoSection } from "../containers";
import { Main } from "../layouts";

import { SliderData, PromoData } from "../data";

const BeliProduk = () => {
  return (
    <Main navbarColor="white" isHomePage={false} playing={true} navShow={true}>
      <CustomCarousel resource={SliderData} />
      <PromoSection resource={PromoData} />
    </Main>
  );
};

export default BeliProduk;
