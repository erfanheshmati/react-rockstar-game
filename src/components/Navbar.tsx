import { HStack, Hide, Image, Show, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const logo = require("../assets/logo.png");

interface Props {
  onSearch: (searchText: string) => void;
}

export default function Navbar({ onSearch }: Props) {
  return (
    <>
      <HStack padding={4} justifyContent={"space-between"}>
        <HStack>
          <Image src={logo} boxSize={50} borderRadius={10} />
          <Text fontSize={"larger"} fontWeight={700} whiteSpace={"nowrap"}>
            Rockstar Game
          </Text>
        </HStack>
        <Show above="md">
          <SearchInput onSearch={onSearch} />
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Hide above="md">
        <HStack paddingX={4} paddingBottom={4}>
          <SearchInput onSearch={onSearch} />
        </HStack>
      </Hide>
      <hr />
    </>
  );
}
