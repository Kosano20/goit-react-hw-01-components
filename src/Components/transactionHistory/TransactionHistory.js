import PropTypes from 'prop-types';
import React from 'react';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={style.TransactionHistory}>
      <thead className={style.Label}>
        <tr className={style.Row}>
          <th className={style.Colom}>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(trans => {
          return (
            <tr key={trans.id}>
              <td>{trans.type}</td>
              <td>{trans.amount}</td>
              <td>{trans.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
