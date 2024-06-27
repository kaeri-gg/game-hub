interface Props {
  metric: number;
}
const CriticScore = ({ metric }: Props) => {
  const color = metric > 90 ? "badge text-bg-success" : "badge text-bg-warning";

  return (
    <div>
      <span className={color}> {metric} </span>
    </div>
  );
};

export default CriticScore;
