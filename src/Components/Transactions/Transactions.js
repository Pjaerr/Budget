import React from 'react';

import styles from './Transactions.scss';

import Transaction from '../Transaction/Transaction';

const Transactions = (props) =>
{
    const { transactions, name } = props.data;

    let transactionObjects = [];

    transactions.forEach(transaction =>
    {
        let description = transaction.description;
        let date = transaction.date;
        let amount = transaction.amount;

        let details = { description, date, amount };

        transactionObjects.push(<Transaction accountName={name} details={details} />);
    });

    return (
        <div className={styles.transactions}>
            {transactionObjects}
        </div>
    );
}

export default Transactions;
