import React from "react";
import { HStack, Hide, Image, Show, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const logo = require("../assets/logo.png");

export default function Navbar() {
  return (
    <>
      <HStack padding={4} justifyContent={"space-between"}>
        <HStack marginRight={20}>
          <Image src={logo} boxSize={50} borderRadius={10} />
          <Text fontSize={"larger"} fontWeight={700} whiteSpace={"nowrap"}>
            Rockstar Game
          </Text>
        </HStack>
        <Show above="md">
          <SearchInput />
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Hide above="md">
        <HStack paddingX={4} paddingBottom={4}>
          <SearchInput />
        </HStack>
      </Hide>
      <hr />
    </>
  );
}
