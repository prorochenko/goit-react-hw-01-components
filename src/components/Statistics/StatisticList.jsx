import Statistic from './Statistic';

export default function StatiscticList({ title, stats }) {
  const elements = stats.map(stat => (
    <li key={stat.id}>
      <Statistic label={stat.label} percentage={stat.percentage} />
    </li>
  ));
  console.log(Boolean(title));
  return (
    <section className="statistics">
      <div className="container">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">{elements}</ul>
      </div>
    </section>
  );
}