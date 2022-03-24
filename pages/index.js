import { ProductOverview, SectionHeader, Video } from "../containers";
import { Main } from "../layouts";

const index = () => {
  return (
    <Main>
      <Video />
      <SectionHeader />
      <ProductOverview />
    </Main>
  );
};

export default index;
