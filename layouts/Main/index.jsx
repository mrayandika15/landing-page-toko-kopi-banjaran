import { Stack } from "@chakra-ui/react";
import { Footer, Navbar } from "../../containers";

const Main = ({ children }) => {
  return (
    <Stack direction="column">
      <Navbar />
      {children}
      <Footer />
    </Stack>
  );
};

export default Main;
