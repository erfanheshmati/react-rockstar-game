import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ selectedGenre, onSelectedGenre }: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  let skeletons = [];
  for (let i = 1; i <= data.length; i++) {
    skeletons.push(i);
  }

  return (
    <List paddingTop={8}>
      <Text fontSize={"20"} paddingX={5} marginBottom={6}>
        Game Genres
      </Text>
      {isLoading &&
        skeletons.map((skeleton) => <GameGenreSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2} paddingX={6}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={38}
              borderRadius={8}
            />
            <Button
              fontSize={14}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              color={genre.id === selectedGenre?.id ? "red" : ""}
              variant="link"
              onClick={() => onSelectedGenre(genre)}
            >
              {genre.name.length > 15
                ? genre.name.substr(0, 15) + "..."
                : genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
