import React from 'react';
import DrowFriend from '../DrowFriend/DrowFriend';
import frends from '../../friends.json';
import styles from './frendlist.module.css';

const FriendList = () => {
  return (
    <section className={`${styles.friendlist} container`}>
      <DrowFriend frends={frends} />
    </section>
  );
};

export default FriendList;
