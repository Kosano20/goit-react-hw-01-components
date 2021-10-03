import PropTypes from 'prop-types';
import style from './Profile.module.css';
import React from 'react';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={style.Profile}>
      <div className={style.Description}>
        <img src={avatar} alt={name} width="200" className={style.Avatar} />
        <p className={style.Name}>{name}</p>
        <p className={style.Tag}>@{tag}</p>
        <p className={style.Location}>{location}</p>
      </div>

      <ul className={style.Stats}>
        {Object.entries(stats).map(stats => {
          return (
            <li key={stats[0]} className={style.Item}>
              <span className={style.Label}>{stats[0]} </span>
              <span className={style.Quantity}>{stats[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
