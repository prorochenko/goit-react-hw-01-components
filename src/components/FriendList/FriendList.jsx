import Friends from './friends';
import css from './friendList.module.css';

export default function FriendList({ friends }) {
  const elements = friends.map(friend => (
    <li key={friend.id} className={css.item}>
      <Friends
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.is}
      />
    </li>
  ));

  return (
    <section className={css.friends}>
      <ul className={css.container}> {elements}</ul>
    </section>
  );
}
