import Friends from './friends';
import { Friend, Container, Item } from './FriendList.styled';

export default function FriendList({ friends }) {
  const elements = friends.map(friend => (
    <Item key={friend.id}>
      <Friends
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.is}
      />
    </Item>
  ));

  return (
    <Friend>
      <Container> {elements}</Container>
    </Friend>
  );
}
