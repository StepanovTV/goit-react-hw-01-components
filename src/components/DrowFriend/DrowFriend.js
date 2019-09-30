import React from 'react';
import PropTypes from 'prop-types';
import styles from './drowfriend.module.css';

const DrowFriend = ({ frends }) => {
  return (
    <ul className={styles.frendlist}>
      {frends.map(item => (
        <li key={item.id} className={styles.item}>
          <span className={item.isOnline ? styles.online : styles.offline} />
          <img
            className={styles.avatar}
            src={item.avatar}
            alt={`${item.name} - ${item.isOnline ? 'Online' : 'Offline'}`}
            width="60"
          />
          <p className={styles.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

DrowFriend.propTypes = {
  frends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default DrowFriend;
