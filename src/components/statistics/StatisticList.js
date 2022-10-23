import Statistic from './Statistic';

export default function StatiscticList({ stats }) {
  return (
    <ul>
      {stats.map(stat => (
        <li key={stat.id}>
          <Statistic
            title={stat.title}
            label={stat.label}
            percentage={stat.percentage}
          />
        </li>
      ))}
    </ul>
  );
}
