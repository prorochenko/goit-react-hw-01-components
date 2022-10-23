import Profile from './profile/Profile';
import user from '../user.json';
import StatiscticList from './statistics/StatisticList';
import data from '../data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatiscticList title="Upload stats" stats={data} />
      <StatiscticList stats={data} />
    </div>
  );
};
