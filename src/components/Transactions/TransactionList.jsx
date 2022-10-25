import Transactions from './Transactions';
import css from './transactions.module.css';

export default function TransactionHistory({ transactions }) {
  const elements = transactions.map(transaction => (
    <tr key={transaction.id}>
      <Transactions
        type={transaction.type}
        amount={transaction.amount}
        currency={transaction.currency}
      />
    </tr>
  ));

  return (
    <section className={css.transaction}>
      <table className={css.transactionHistory}>
        <thead className={css.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tableElemets}>{elements}</tbody>
      </table>
    </section>
  );
}
