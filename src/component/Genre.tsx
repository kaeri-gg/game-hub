interface Children {
  id: number;
  name: string;
  img: string;
  link: string;
}

interface Genre {
  genres: Children[];
  onClick: (name: string) => void;
}
const Genre = ({ genres, onClick }: Genre) => {
  return (
    <>
      <div className="">
        <h3 className="mt-3 ms-2 fw-bold">Genres</h3>
        <div className="grid gap-0 row-gap-3">
          {genres.map((genre) => (
            <div className="p-2 g-col-6 d-flex" key={genre.id}>
              <img src={genre.img} className="img-fluid me-3" />
              <a
                className="align-content-center"
                href={genre.link}
                onClick={() => onClick(genre.name)}
              >
                {" "}
                {genre.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genre;
