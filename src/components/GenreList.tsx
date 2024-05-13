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
    <>
      <Heading size={"lg"} paddingX={5} marginTop={7}>
        Genres
      </Heading>
      <List paddingY={5}>
        {isLoading &&
          skeletons.map((skeleton) => <GameGenreSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2} paddingX={5}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={38}
                borderRadius={"50%"}
                objectFit={"cover"}
              />
              <Button
                fontSize={15}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                color={genre.id === selectedGenre?.id ? "orange" : ""}
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
    </>
  );
}
