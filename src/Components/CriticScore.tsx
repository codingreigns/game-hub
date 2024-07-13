import { Badge } from "@chakra-ui/react";

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  const colors = criticScore > 80 ? "green" : "yellow";

  return (
    <Badge
      colorScheme={colors}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
    >
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
