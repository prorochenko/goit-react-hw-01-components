import Transactions from './Transactions';
import css from './transactions.module.css';

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
    <section className={css.transaction}>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    </section>
  );
}
