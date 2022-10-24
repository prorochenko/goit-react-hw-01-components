import PropTypes from 'prop-types';
import './friendList.css';

export default function Friends(props) {
  const { avatar, name, isOnline } = props;

  return (
    <li className="item">
      {isOnline ? (
        <span className="statusOnline"></span>
      ) : (
        <span className="statusOffline"></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
