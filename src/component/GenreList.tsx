import { Button } from '@chakra-ui/react';
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
        <h3 className="mt-3 ms-2 fw-bold">Genres</h3>
        <div className="grid gap-0 row-gap-3">
          {genres.map(genre => (
            <div className="p-2 g-col-6 d-flex" key={genre.id}>
              <div className="custom-genre-container">
                <img src={genre.img} className="rounded me-3" />
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GenreList;
