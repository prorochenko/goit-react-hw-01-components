import Profile from './Profile/Profile';
import user from '../user.json';
import StatiscticList from './Statistics/StatisticList';
import data from '../data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './Transactions/TransactionList';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 24,
        color: '#010101',
      }}
    >
      Task 1
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      Task 2
      <StatiscticList title="Upload stats" stats={data} />
      <StatiscticList stats={data} />
      Task 3
      <FriendList friends={friends} />
      Task 4
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
