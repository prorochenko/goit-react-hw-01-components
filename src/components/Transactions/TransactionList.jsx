import Transactions from './Transactions';
export default function TransactionHistory({ transactions }) {
  const elements = transactions.map(transaction => (
    <Transactions
      id={transaction.id}
      type={transaction.type}
      amount={transaction.amount}
      currency={transaction.currency}
    />
  ));

  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{elements}</tbody>
    </table>
  );
}
