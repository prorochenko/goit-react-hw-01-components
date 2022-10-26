import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';
// import css from './friendList.module.css';
import { Status, Name, Avatar } from './FriendList.styled';

export default function Friends(props) {
  const { avatar, name, isOnline } = props;

  return (
    <>
      <Status $type={isOnline}>
        <GrStatusGoodSmall />
      </Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
