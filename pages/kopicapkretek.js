import { ProductDetails } from "../containers";
import { Main } from "../layouts";
import { Image } from "@chakra-ui/react";
import Head from "next/head";

const KopiCapKretek = ({ data }) => {
  return (
    <Main navbarColor="black" isHomePage={false} playing={true} navShow={true}>
      <Head>
        <title> Kopi Cap Kretek | Toko Kopi Banjaran</title>
      </Head>
      <Image
        src="/assets/img/UI/Background_Produk_Kami.png"
        position="absolute"
        inset="0px"
        height="100%"
        width="100%"
        display={["none", "block"]}
      />
      <ProductDetails
        resource={data?.detail}
        image={data?.img}
        header={data?.name}
        whatNext={data?.whatNext}
        whatNextSrc={data?.whatNextSrc}
      />
    </Main>
  );
};

export async function getServerSideProps({ req }) {
  // get current url
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = req ? `${protocol}://${req.headers.host}` : "";

  const res = await fetch(baseUrl + `/api/product/cap-kretek`);
  const data = await res.json();

  return { props: { data } };
}

export default KopiCapKretek;
