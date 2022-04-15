import {
  Center,
  Flex,
  VStack,
  Text,
  Image,
  HStack,
  Link,
  Stack,
  Button,
} from "@chakra-ui/react";

const MobileView = ({ resource }) => {
  return (
    <VStack gap="10px" display={["flex", "none"]} mt={["40px", "0px"]}>
      <Center>
        <Text fontSize={["60px"]} textDecoration="underline" fontWeight="bold">
          {resource.header}
        </Text>
      </Center>
      <HStack justify={"center"} px={"8px"} gap="2px">
        <Image src={resource.image} w={["123px"]} h={["155px"]} />
        <Flex direction={"column"}>
          <Image
            src="/assets/img/LogoWithoutImage.png"
            w={["209px", "514px"]}
            h={["61px", "134px"]}
          />
          <Text fontSize={"sm"}>
            {resource.location} | <Link color={"#D76A6A"}>Whatsapp</Link>
          </Text>
        </Flex>
      </HStack>
      <Stack width={"full"} height={"319.48px"} my="4px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6768108006486!2d107.58457871461441!3d-7.047212371011112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eb84aa109397%3A0x1f92ed424a106ef6!2sToko%20Kopi%20Banjaran!5e0!3m2!1sid!2sid!4v1648793649685!5m2!1sid!2sid"
          width="100%"
          height="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Stack>

      <Center py="20px">
        <Button variant="primary" isActive>
          {resource.buttonName}
        </Button>
      </Center>
    </VStack>
  );
};

export default MobileView;
