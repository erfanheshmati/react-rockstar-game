import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const logo = require("../assets/logo.png");

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize="50px" borderRadius="10px" />
        <Text fontSize="18px" fontWeight="500">
          Rockstar Game
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}
