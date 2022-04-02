import {
  LocationDetails,
  ProductOverview,
  SectionHeader,
  Video,
} from "../containers";
import { Main } from "../layouts";

const index = () => {
  return (
    <Main navbarColor="white" isHomePage>
      <Video />
      <SectionHeader />
      <ProductOverview />
      <LocationDetails />
    </Main>
  );
};

export default index;
