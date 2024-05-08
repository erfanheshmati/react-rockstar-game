import { HStack, Image, Text } from "@chakra-ui/react";

const logo = require("../assets/logo.png");

export default function Navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" borderRadius="10px" margin="10px" />
      <Text fontSize="18px" fontWeight="500">
        Rockstar Game
      </Text>
    </HStack>
  );
}
