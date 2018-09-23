import React from 'react';

import styles from './Account.scss';

import Header from '../Header/Header';

const Account = (props) =>
{
    const { account, income, outcome } = props.data;

    return (
        <div className={styles.Account}>
            <Header data={props.data} />
        //! Specific Income/Outcome inside a single component that takes props.data here.
        </div>
    );
}

export default Account;
