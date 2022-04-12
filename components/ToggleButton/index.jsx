import { Box, Button, Flex } from "@chakra-ui/react";

const ToggleButton = ({ Active, setActive }) => {
  return (
    <Box p="8px" borderWidth="1px" background="white" mt="14px">
      <Flex direction="row" gap="2">
        <Button
          onClick={() =>
            setActive({ ProductBjrActive: true, ProductCapKretekActive: false })
          }
          variant="primary"
          isActive={Active.ProductBjrActive}
        >
          Kopi BJR
        </Button>
        <Button
          onClick={() =>
            setActive({ ProductBjrActive: false, ProductCapKretekActive: true })
          }
          variant="primary"
          isActive={Active.ProductCapKretekActive}
        >
          Kopi Cap Kretek
        </Button>
      </Flex>
    </Box>
  );
};
export default ToggleButton;
