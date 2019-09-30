import React from 'react';
import PropTypes from 'prop-types';
import styles from './drowstats.module.css';

const randomColor = function randomColor() {
  // eslint-disable-next-line no-bitwise
  return `#${((Math.random() * 0x1000000) | 0x1000000).toString(16).substr(1)}`;
};

const DrowStats = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(elem => (
          <li
            key={elem.id}
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{elem.label}</span>
            <span className={styles.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </>
  );
};

DrowStats.defaultProps = {
  title: '',
};

DrowStats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default DrowStats;
