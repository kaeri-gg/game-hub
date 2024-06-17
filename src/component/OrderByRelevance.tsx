interface Props {
  id: number;
  name: string;
  link: string;
}

interface Relevance {
  relevances: Props[];
}
const OrderByRelevance = ({ relevances }: Relevance) => {
  return (
    <div className="dropdown ms-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order by Relevance
      </button>
      <ul className="dropdown-menu">
        {relevances.map((relevance) => (
          <li key={relevance.id}>
            <a className="dropdown-item" href={relevance.link}>
              {relevance.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderByRelevance;