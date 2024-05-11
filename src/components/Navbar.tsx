import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const logo = require("../assets/logo.png");

export default function Navbar() {
  return (
    <HStack
      justifyContent={"space-between"}
      padding={4}
      borderBottom={"1px solid gray"}
    >
      <HStack>
        <Image src={logo} boxSize={50} borderRadius={10} />
        <Text fontSize={"larger"} fontWeight={700}>
          Rockstar Game
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}
