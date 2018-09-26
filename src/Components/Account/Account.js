import React from 'react';

import styles from './Account.scss';

import Header from '../Header/Header';
import Transactions from '../Transactions/Transactions';

const Account = (props) =>
{
    const account = props.account;

    return (
        <div className={styles.Account}>
            <Header data={props.data} />
            <Transactions data={props.data} />
        </div>
    );
}

export default Account;
