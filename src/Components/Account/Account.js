import React from 'react';

import styles from './Account.scss';

import Header from '../Header/Header';
import Transactions from '../Transactions/Transactions';

const Account = (props) =>
{
    const { name, balance, income, outcome, transactions } = props.data;

    return (
        <div className={styles.Account}>
            <Header data={{ name, balance, income, outcome }} />
            <Transactions data={{ transactions, name }} />
        </div>
    );
}

export default Account;
