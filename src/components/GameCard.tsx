import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card height={"fit-content"} borderRadius={10}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        borderTopRadius={10}
      />
      <CardBody>
        <Heading fontSize={20} noOfLines={1}>
          {game.name}
        </Heading>
        <HStack marginTop={2} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
