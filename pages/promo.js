import { CustomCarousel, PromoSection } from "../containers";
import { Main } from "../layouts";

import { SliderData, PromoData } from "../data";

const Promo = () => {
  return (
    <Main navbarColor="white" isHomePage={false}>
      <CustomCarousel resource={SliderData} />
      <PromoSection resource={PromoData} />
    </Main>
  );
};

export default Promo;
