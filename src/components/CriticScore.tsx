import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize={14}
      paddingX={2}
      paddingY={1}
      borderRadius={5}
    >
      {!score ? "..." : score}
    </Badge>
  );
}
