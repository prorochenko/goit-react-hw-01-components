import PropTypes from 'prop-types';
import defaultImage from '../default.png';
import './profile.css';

export default function Profile(props) {
  const {
    avatar = defaultImage,
    username,
    tag = 'not found',
    location,
    followers,
    views,
    likes,
  } = props;

  return (
    <section className="profile">
      <div className="container">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li className="stats__item">
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className="stats__item">
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className="stats__item">
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
