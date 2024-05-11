import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box boxShadow="lg" height={"fit-content"} borderRadius={10}>
      {children}
    </Box>
  );
}
