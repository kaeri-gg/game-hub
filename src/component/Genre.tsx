import useGenres from "../hook/useGenres";

const Genre = () => {
  const { genres } = useGenres();

  return (
    <>
      <div className="">
        <h3 className="mt-3 ms-2 fw-bold">Genres</h3>
        <div className="grid gap-0 row-gap-3">
          {genres.map((genre) => (
            <div className="p-2 g-col-6 d-flex" key={genre.id}>
              <div className="custom-genre-container">
                <img src={genre.img} className="rounded me-3" />
              </div>
              <a className="align-content-center" href={genre.link}>
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
