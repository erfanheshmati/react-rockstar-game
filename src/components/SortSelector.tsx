import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        fontSize={14}
        marginTop={7}
      >
        Order by
      </MenuButton>
      <MenuList fontSize={14}>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Data added</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Rating</MenuItem>
      </MenuList>
    </Menu>
  );
}
