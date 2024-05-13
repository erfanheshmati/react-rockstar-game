import { HStack, Hide, Image, Link, Show, Text } from "@chakra-ui/react";
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
        <Link href={"#"} style={{ textDecoration: "none" }}>
          <HStack>
            <Image src={logo} boxSize={50} borderRadius={10} />
            <Show above="sm">
              <Text
                fontFamily={"-moz-initial"}
                fontSize={"x-large"}
                fontWeight={600}
                whiteSpace={"nowrap"}
              >
                Rockstar Game
              </Text>
            </Show>
          </HStack>
        </Link>
        <Show above="lg">
          <SearchInput onSearch={onSearch} />
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Hide above="lg">
        <HStack paddingX={4} paddingBottom={4}>
          <SearchInput onSearch={onSearch} />
        </HStack>
      </Hide>
      <hr />
    </>
  );
}
