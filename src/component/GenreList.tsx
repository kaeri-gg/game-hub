import { Button, HStack, Img } from '@chakra-ui/react';
import useGenre, { Genre } from '../hook/useGenre';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres } = useGenre();

  return (
    <>
      <div className="">
        <h3 className="fw-bold">Genres</h3>
        <div className="grid gap-0 row-gap-3">
          {genres.map(genre => (
            <HStack key={genre.id}>
              <Img src={genre.img} borderRadius="5" boxSize="40px" objectFit="cover" my="10px" />
              <Button
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {' '}
                {genre.name}
              </Button>
            </HStack>
          ))}
        </div>
      </div>
    </>
  );
};

export default GenreList;
