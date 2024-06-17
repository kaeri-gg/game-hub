interface Props {
  id: number;
  name: string;
  link: string;
}

interface Platform {
  platforms: Props[];
}
const Platforms = ({ platforms }: Platform) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Platforms
      </button>
      <ul className="dropdown-menu">
        {platforms.map((platform) => (
          <li key={platform.id}>
            <a className="dropdown-item" href={platform.link}>
              {platform.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;