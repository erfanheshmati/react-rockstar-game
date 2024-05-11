import { SimpleGrid, Text, useToast } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

export default function GameGrid({ selectedGenre }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre);

  let skeletons = [];
  for (let i = 1; i <= data.length; i++) {
    skeletons.push(i);
  }

  const toast = useToast();
  const id: string = "";

  return (
    <>
      {error && !toast.isActive(id)
        ? toast({ id, title: `${error}`, status: "error", position: "top" })
        : ""}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
