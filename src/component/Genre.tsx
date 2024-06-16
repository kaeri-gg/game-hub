interface Children {
  id: number;
  name: string;
  img: string;
}

interface Props {
  genre: Children[];
}
const Genre = ({ genre }: Props) => {
  return (
    <>
      <div className="">
        <div className="grid gap-0 row-gap-3">
          {}
          <div className="p-2 g-col-6 d-flex">
            <img
              src="https://picsum.photos/32/"
              alt="Game 3"
              className="img-fluid me-3"
            />
            <span className="align-content-center"> Grid item 1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
