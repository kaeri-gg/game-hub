interface Props {
  metric: number;
}
const CriticScore = ({ metric }: Props) => {
  const color =
    metric > 90
      ? "badge text-bg-success"
      : metric > 80
      ? "badge text-bg-warning"
      : "";

  return (
    <div>
      <span className={color}> {metric} </span>
    </div>
  );
};

export default CriticScore;
