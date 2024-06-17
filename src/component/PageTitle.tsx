interface Title {
  name: string;
}
const PageTitle = ({ name }: Title) => {
  return <h1 className="display-3 fw-bold">{name}</h1>;
};

export default PageTitle;
