import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { useState } from "react";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  let skeletons = [];
  for (let i = 1; i <= data.length; i++) {
    skeletons.push(i);
  }

  const toast = useToast();
  const id: string = "";

  /* Pagination */
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const isActive = (idx: any) => (currentPage === idx + 1 ? true : false);

  return (
    <>
      {error && !toast.isActive(id)
        ? toast({ id, title: `${error}`, status: "error", position: "top" })
        : ""}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        paddingY={5}
        paddingX={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {currentItems.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>

      {/* Pagination */}
      <Box width={"fit-content"} marginX={"auto"} marginY={10}>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, index) => (
            <Button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              marginX={1}
              isActive={isActive(index)}
            >
              {index + 1}
            </Button>
          )
        )}
      </Box>
    </>
  );
}
