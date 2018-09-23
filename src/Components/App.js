import React from 'react';

import styles from './App.scss';

// ---- Components ----
import Account from './Account/Account';

// ---- Data ----
//! Will be coming from Firebase/External DB eventually.
import data from '../data';

class App extends React.Component 
{
  render()
  {
    return (
      <div className={styles.app}>

      //Todo: put routing here that links to relevant accounts.

      </div>
    );
  }
}

export default App;
