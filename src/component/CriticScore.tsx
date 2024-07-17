import { Badge } from '@chakra-ui/react';

interface Props {
  metric: number;
}
const CriticScore = ({ metric }: Props) => {
  const color = metric > 90 ? 'green' : 90 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="14px">
      {metric}
    </Badge>
  );
};

export default CriticScore;
