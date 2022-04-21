import { Flex, Image, Text } from "@chakra-ui/react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="white"
      position="fixed"
      zIndex="popover"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        w="full"
        mb={["0px", "20px"]}
      >
        <Image
          w="200px"
          h="auto"
          src="/assets/img/UI/Kretek-01.png"
          className={style.kretek}
        />
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        w="full"
        top="54%"
      >
        <Image
          src="/assets/img/UI/Wheels-01.png"
          w="40px"
          h="auto"
          className={style.wheels}
          mr="25px"
        />
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        w="full"
        top="59%"
      >
        <Image src="/assets/img/UI/Road-01.png" w="200px" h="auto" />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        w="full"
        top="62%"
      >
        <Text color="primary">Silahkan Tunggu . . .</Text>
      </Flex>
    </Flex>
  );
};

export default Loading;
