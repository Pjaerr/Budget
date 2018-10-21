import React from 'react';

import styles from './Account.scss';

import Header from '../Header/Header';
import Transactions from '../Transactions/Transactions';

import { isNegative } from '../../utils/js/utils';

class Account extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = { name: this.props.data.name, transactions: this.props.data.transactions };
    }

    updateAccountData = (newTransactions) =>
    {
        this.setState({ transactions: newTransactions });
    }

    render()
    {
        const { name, transactions } = this.state;

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
                <Transactions data={{ transactions, name }} updateAccountData={this.updateAccountData} createTransaction={this.props.createTransaction} />
            </div>
        );
    }
}

export default Account;
