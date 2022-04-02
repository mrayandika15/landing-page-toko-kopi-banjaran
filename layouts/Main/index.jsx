import { Flex } from "@chakra-ui/react";
import { Footer, Navbar } from "../../containers";

const Main = ({ children, navbarColor, isHomePage }) => {
  return (
    <Flex direction="column">
      <Navbar color={navbarColor} isHomePage={isHomePage} />
      {children}
      <Footer />
    </Flex>
  );
};

export default Main;
