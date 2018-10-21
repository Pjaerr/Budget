import React from 'react';

import styles from './App.scss';

// ---- Components ----
import Account from './Account/Account';

// ---- Data ----
//! Will be coming from Firebase/External DB eventually.
import { data, createTransaction } from '../data';

// ---- Routing ----
import { Route, BrowserRouter, Switch } from "react-router-dom";

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

    let overviewData = { name: "Overview", transactions: [] };

    data.accounts.forEach(account =>
    {
      let path = "/" + account.name.replace(/\s+/g, '-').toLowerCase();

      accountObjects.push(<Route path={path} component={() => <Account data={account} createTransaction={createTransaction} />} />);

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Account data={this.state.overviewData} createTransaction={createTransaction} />} />

            {this.state.accountObjects}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
