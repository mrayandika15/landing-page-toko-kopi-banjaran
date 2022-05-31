import { CustomCarousel, PromoSection } from "../containers";
import { Main } from "../layouts";

import { SliderData, PromoData } from "../data";
import Head from "next/head";

const BeliProduk = () => {
  return (
    <Main navbarColor="white" isHomePage={false} playing={true} navShow={true}>
      <Head>
        <title>Beli Produk | Toko Kopi Banjaran</title>
      </Head>
      <CustomCarousel resource={SliderData} />
      <PromoSection resource={PromoData} />
    </Main>
  );
};

export default BeliProduk;
