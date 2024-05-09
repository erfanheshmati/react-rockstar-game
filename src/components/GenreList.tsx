import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

export default function GenreList() {
  const { data } = useGenres();

  return (
    <List paddingTop={8}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2} paddingX={5}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={38}
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
