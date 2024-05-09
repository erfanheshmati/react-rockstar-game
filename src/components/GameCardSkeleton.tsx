import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton height={250} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
