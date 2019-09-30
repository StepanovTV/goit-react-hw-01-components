import React from 'react';
import DrowTrsnsaction from '../DrowTrsnsaction/DrowTrsnsaction';
import transaction from '../../transactions.json';

const TransactionHistory = () => {
  return (
    <section className="container">
      <DrowTrsnsaction transaction={transaction} />
    </section>
  );
};

export default TransactionHistory;
