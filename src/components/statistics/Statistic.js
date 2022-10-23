import PropTypes from 'prop-types';

export default function Statistic(props) {
  const { title, label, percentage } = props;

  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}%</span>
        </li>
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
