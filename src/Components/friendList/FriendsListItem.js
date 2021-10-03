import PropTypes from 'prop-types';
import React from 'react';
import style from './FriendsList.module.css';

const FriendsListItem = ({ friend }) => {
  return (
    <li className={style.Item}>
      <span className={friend.isOnline ? style.Online : style.Offline}></span>
      <img
        src={friend.avatar}
        alt={friend.name}
        width="100"
        className={style.Img}
      />
      <p className={style.Name}>{friend.name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendsListItem;
