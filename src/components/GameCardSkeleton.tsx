import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card borderRadius={10}>
      <Skeleton height={250} borderTopRadius={10} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
