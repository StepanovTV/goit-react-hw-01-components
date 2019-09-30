import React from 'react';
import ProfileRender from '../ProfileRender/ProfileRender';
import user from '../../userObj';
import styles from './SocialProfile.module.css';

const SocialProfile = () => {
  return (
    <section className={`${styles.socialprofile} container`}>
      <ProfileRender user={user} />
    </section>
  );
};

export default SocialProfile;
