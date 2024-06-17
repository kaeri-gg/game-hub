interface Children {
  id: number;
  name: string;
  img: string;
}

interface Genre {
  genres: Children[];
}
const Genre = ({ genres }: Genre) => {
  return (
    <>
      <div className="">
        <div className="grid gap-0 row-gap-3">
          {genres.map((genre) => (
            <div className="p-2 g-col-6 d-flex" key={genre.id}>
              <img src={genre.img} className="img-fluid me-3" />
              <span className="align-content-center"> {genre.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Genre;
