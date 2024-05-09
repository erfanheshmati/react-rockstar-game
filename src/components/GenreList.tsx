import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

export default function GenreList() {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <List paddingTop={8}>
      {isLoading &&
        skeletons.map((skeleton) => <GameGenreSkeleton key={skeleton} />)}
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
