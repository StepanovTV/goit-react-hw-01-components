import React from 'react';
import PropTypes from 'prop-types';
import styles from './drowtransaction.module.css';

const DrowTrsnsaction = ({ transaction }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(row => (
          <tr key={row.id}>
            <td align="center" valign="middle">
              {row.type}
            </td>
            <td align="center" valign="middle">
              {row.amount}
            </td>
            <td align="center" valign="middle">
              {row.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DrowTrsnsaction.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DrowTrsnsaction;
