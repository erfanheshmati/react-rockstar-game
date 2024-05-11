import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export default function SortSelector({
  onSelectedSortOrder,
  sortOrder,
}: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-name", label: "Name" },
    { value: "-added", label: "Data Added" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        fontSize={14}
        marginTop={7}
      >
        {currentSortOrder?.label || "Order by"}
      </MenuButton>
      <MenuList fontSize={14}>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectedSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
