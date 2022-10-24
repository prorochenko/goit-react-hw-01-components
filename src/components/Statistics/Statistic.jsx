import PropTypes from 'prop-types';
import './statistic.css';

export default function Statistic(props) {
  const { label, percentage } = props;
  const randomColor =
    '#' + (((1 << 24) * Math.random()) | 0).toString(16) + '35';

  return (
    <li
      className="stat-list__item"
      style={{ backgroundColor: `${randomColor}` }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
