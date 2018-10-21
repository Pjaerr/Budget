import React from 'react';

import styles from './Account.scss';

import Header from '../Header/Header';
import Transactions from '../Transactions/Transactions';

import { isNegative } from '../../utils/js/utils';

/*
    ! Set state here for when the data has changed so that Transactions component can re-render.

    probably have local transactions taken from data stored in local state and then pushed
    up to external data source when properly changed, allowing transactions to update more easily
    when a transaction is added without having to make an external call, also helps when working
    in offline mode as don't have to try the external source and wait before actually re-rendering
    transactions component.
*/

const calculateAccountBalance = (transactions) =>
{

}

const Account = (props) => 
{
    const { name, transactions } = props.data;

    let income = 0;
    let outcome = 0;
    let balance = 0;

    transactions.forEach(transaction => 
    {
        let amount = transaction.amount;

        isNegative(amount) ? outcome += amount : income += amount;

        balance += amount;
    });

    return (
        <div className={styles.Account}>
            <Header data={{ name, balance, income, outcome }} />
            <Transactions data={{ transactions, name }} />
        </div>
    );
}

export default Account;
