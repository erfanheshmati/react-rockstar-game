import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

export default function GenreList({ onSelectedGenre }: Props) {
  const { data, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

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
            <Button variant="link" onClick={() => onSelectedGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
