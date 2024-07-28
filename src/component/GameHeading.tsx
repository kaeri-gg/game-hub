import { Heading } from '@chakra-ui/react';

interface Title {
  name: string;
}
const GameHeading = ({ name }: Title) => {
  return (
    <Heading as="h2" size="3xl" noOfLines={1} marginBottom={5}>
      {name}
    </Heading>
  );
};

export default GameHeading;
