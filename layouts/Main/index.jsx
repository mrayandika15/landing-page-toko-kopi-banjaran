import { Flex } from "@chakra-ui/react";
import { Footer, Navbar } from "../../containers";

import { motion } from "framer-motion";

const Main = ({ children, navbarColor, isHomePage }) => {
  return (
    <Flex
      direction="column"
      display="flex"
      width="100%"
      height="100%"
      as={motion.div}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
    >
      <Navbar color={navbarColor} isHomePage={isHomePage} />

      {children}

      <Footer />
    </Flex>
  );
};

export default Main;
