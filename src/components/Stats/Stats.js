import React from 'react';
import DrowStats from '../DrowStats/DrowStats';
import statsArr from '../../statsArr';
import styles from './stats.module.css';

const title = 'upload stats';
const Stats = () => {
  return (
    <section className={`${styles.statsSection} container`}>
      <DrowStats title={title} stats={statsArr} />
    </section>
  );
};

export default Stats;
