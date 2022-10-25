import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';
import css from './friendList.module.css';

export default function Friends(props) {
  const { avatar, name, isOnline } = props;

  return (
    <>
      <span>
        <GrStatusGoodSmall className={`${css.icon} ${css[isOnline]}`} />
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
