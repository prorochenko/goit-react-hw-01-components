import PropTypes from 'prop-types';
import Statistic from './Statistic';
import css from './statistic.module.css';

export default function StatiscticList({ title, stats }) {
  const elements = stats.map(stat => (
    <li key={stat.id}>
      <Statistic label={stat.label} percentage={stat.percentage} />
    </li>
  ));
  return (
    <section className={css.statistics}>
      <div div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>{elements}</ul>
      </div>
    </section>
  );
}

StatiscticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
