import Friends from './friends';

export default function FriendList({ friends }) {
  const elements = friends.map(friend => (
    <li key={friend.id}>
      <Friends
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.is}
      />
    </li>
  ));

  return <ul className="friend-list">{elements}</ul>;
}
