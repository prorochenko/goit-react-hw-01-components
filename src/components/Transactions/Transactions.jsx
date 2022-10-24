import PropTypes from 'prop-types';
import './transactions.css';

export default function Transactions(props) {
  const { id, type, amount, currency } = props;

  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  //amount ругается, если вместо string - number
  currency: PropTypes.string,
};
