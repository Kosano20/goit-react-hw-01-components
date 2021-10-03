import PropTypes from 'prop-types';
import React from 'react';
import style from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.List}>
      {friends.map(friend => (
        <FriendsListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default FriendList;
