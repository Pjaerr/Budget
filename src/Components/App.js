import React from 'react';

import styles from './App.scss';

// ---- Components ----
import Overview from './Overview/Overview';

// ---- Data ----
//! Will be coming from Firebase/External DB eventually.
import data from '../data';

class App extends React.Component 
{
  render()
  {
    return (
      <div className={styles.app}>
        <Overview data={data}></Overview>
      </div>
    );
  }
}

export default App;
