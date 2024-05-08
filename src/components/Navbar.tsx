import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const logo = require("../assets/logo.png");

export default function Navbar() {
  return (
    <HStack justifyContent={"space-between"} padding={4}>
      <HStack>
        <Image src={logo} boxSize={50} borderRadius={10} />
        <Text fontSize={18} fontWeight={500}>
          Rockstar Game
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}
