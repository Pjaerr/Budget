import React from 'react';

import styles from './Transactions.scss';

import Transaction from '../Transaction/Transaction';

const Transactions = (props) =>
{
    // ! Account should have an array of transactions on it in the data.
    const account = props.account;

    let transactions = [];

    foreach(transaction in account.transactions)
    {
        let description = transaction.description;
        let date = transaction.date;
        let amount = transaction.amount;

        let details = { description, date, amount };

        transactions.push(<Transaction accountName={account.name} details={details} />);
    }

    return (
        <div className={styles.transactions}>
            {transactions};
        </div>
    );
}

export default Transactions;
