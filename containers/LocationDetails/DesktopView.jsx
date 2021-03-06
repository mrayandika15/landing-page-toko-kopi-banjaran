import {
  HStack,
  VStack,
  Center,
  Text,
  Flex,
  Link,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";

const DesktopView = ({ resource }) => {
  return (
    <VStack display={["none", "flex"]} py="25px">
      <HStack justify={"center"} px="10px">
        <VStack w="full">
          <Text
            fontSize={["60px"]}
            textDecoration="underline"
            fontWeight="bold"
          >
            {resource.header}
          </Text>

          <Flex gap="10px">
            <Image src="/assets/img/LogoWithoutImage.png" w="260px" h="68px" />
            <Text fontSize={"md"}>
              {resource.location} | <Link color={"#D76A6A"}>Whatsapp</Link>
            </Text>
          </Flex>

          <Stack width={"full"} height={"580px"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6768108006486!2d107.58457871461441!3d-7.047212371011112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68eb84aa109397%3A0x1f92ed424a106ef6!2sToko%20Kopi%20Banjaran!5e0!3m2!1sid!2sid!4v1648793649685!5m2!1sid!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <Flex justifyContent="end">
              <Button
                variant="primary"
                isActive
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?ll=-7.047218,107.586767&z=16&t=m&hl=id&gl=ID&mapclient=embed&cid=2275141630741737206"
                  )
                }
              >
                {resource.buttonName}
              </Button>
            </Flex>
          </Stack>
        </VStack>

        <Image src={resource.image} w={["680px"]} h={["full"]} />
      </HStack>
    </VStack>
  );
};

export default DesktopView;
