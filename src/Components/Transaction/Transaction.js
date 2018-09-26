import React from 'react';

import styles from './Transaction.scss';


const Transaction = (props) =>
{
    const accountName = props.accountName;
    const { description, date, amount } = props.details;

    return (
        <div className={styles.transaction}>
            <h1 className={styles.amount}>{amount}</h1>
            <h2 className={styles.date}>{date}</h2>
            <h2 className={styles.description}>{description}</h2>
            <h3 className={styles.account}>Account: {accountName}</h3>
        </div>
    );
}

export default Transaction;
