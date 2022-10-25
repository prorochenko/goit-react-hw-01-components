import PropTypes from 'prop-types';
import css from './statistic.module.css';

export default function Statistic(props) {
  const { id, label, percentage } = props;
  const randomColor =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16) + '35';

  return (
    <li
      key={id}
      className={css.statList__item}
      style={{ backgroundColor: `${randomColor}` }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
