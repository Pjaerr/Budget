import React from 'react';

import styles from './Transactions.scss';

import Transaction from '../Transaction/Transaction';
import CreateTransactionForm from '../CreateTransaction/CreateTransactionForm';

class Transactions extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { transactions: this.props.data.transactions };

        if (this.props.data.name === "Fake Account")
        {
            window.transaction = this;
        }
    }

    createTransaction = ({ amount, date, description }) =>
    {
        let transaction = { description, date, amount };

        let transactions = this.state.transactions;

        transactions.push(transaction);

        this.props.createTransaction(this.props.data.name, amount, date, description);

        this.setState({ transactions });
        this.props.updateAccountData(transactions);
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

            let accountName = transaction.account ? transaction.account : name;

            let details = { description, date, amount };

            transactionObjects.push(<Transaction key={date + description + amount + new Date() + Math.random()} accountName={accountName} details={details} />);
        });

        if (transactionObjects.length > 0)
        {
            return transactionObjects;
        }
        else
        {
            return <div style={{ display: 'flex', justifyContent: 'center' }}>No Transactions 🤷</div>
        }
    }

    render()
    {
        return (
            <div className={styles.transactions}>
                {this.renderTransactions()}

                <CreateTransactionForm createTransaction={this.createTransaction} />
            </div>
        );
    }
}

export default Transactions;
