import PropTypes from 'prop-types';

export default function Transactions(props) {
  const { type, amount, currency } = props;

  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  //amount ругается, если вместо string - number
  currency: PropTypes.string,
};
