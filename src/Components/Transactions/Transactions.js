import React from 'react';

import styles from './Transactions.scss';

import Transaction from '../Transaction/Transaction';

class Transactions extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { transactions: this.props.data.transactions };

        window.transactions = this;
    }

    pushTransactionsToStorage = () =>
    {
        //Todo: Update external data source/or internal if can't make contact with state.transactions
        // ! ^^ would probs be a function passed down as a prop that goes all the way back up to App.js
    }

    createTransaction = (amount, date, description) =>
    {
        let transaction = { description, date, amount };

        let transactions = this.state.transactions;

        transactions.push(transaction);

        this.setState({ transactions });
    }

    renderTransactions = () =>
    {
        const { transactions, name } = this.props.data;

        let transactionObjects = [];

        transactions.forEach(transaction =>
        {
            let description = transaction.description;
            let date = transaction.date;
            let amount = transaction.amount;

            let details = { description, date, amount };

            transactionObjects.push(<Transaction key={date + description + amount + new Date() + Math.random()} accountName={name} details={details} />);
        });

        return transactionObjects;
    }

    render()
    {
        return (
            <div className={styles.transactions}>
                {this.renderTransactions()}
            </div>
        );
    }
}

export default Transactions;
