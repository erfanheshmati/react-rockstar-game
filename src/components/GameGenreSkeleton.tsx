import {
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export default function GameGenreSkeleton() {
  return (
    <List>
      <ListItem paddingY={2} paddingX={5}>
        <HStack>
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={1} width="20" />
        </HStack>
      </ListItem>
    </List>
  );
}
