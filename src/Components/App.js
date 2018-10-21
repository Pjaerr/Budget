import React from 'react';

import styles from './App.scss';

// ---- Components ----
import Account from './Account/Account';

// ---- Data ----
//! Will be coming from Firebase/External DB eventually.
import data from '../data';

class App extends React.Component 
{
  constructor(props)
  {
    super(props);

    this.setupAccounts();
  }

  setupAccounts = () =>
  {
    let accountObjects = [];

    let overviewData = { name: "Overview", balance: "200", income: "250", outcome: "-50", transactions: [] };

    data.accounts.forEach(account =>
    {
      //! Convert to instead of flat out rendering the accounts, add them to routes
      accountObjects.push(<Account name={account.name} data={account} />)

      account.transactions.forEach(transaction =>
      {
        overviewData.transactions.push(
          {
            description: transaction.description,
            date: transaction.date,
            amount: transaction.amount,
            account: account.name
          }
        );
      });
    });

    this.state = { overviewData, accountObjects };
  }

  render()
  {
    return (
      <div className={styles.app}>
        {/*Create a new data strucure made up of all transactions from all accounts and pass in here*/}
        <Account isOverview={true} name={"Overview"} data={this.state.overviewData} />

        {/* {this.state.accountObjects} */}
      </div>
    );
  }
}

export default App;
