import { ProductDetails } from "../containers";
import { Main } from "../layouts";

const ProductBjr = ({ data }) => {
  return (
    <Main navbarColor="black" isHomePage={false}>
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

  const res = await fetch(baseUrl + `/api/product/bjr`);
  const data = await res.json();

  return { props: { data } };
}

export default ProductBjr;
