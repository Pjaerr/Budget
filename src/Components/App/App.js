import React from 'react';

import styles from './App.scss';

class App extends React.Component 
{
  render()
  {
    return (
      <div className={styles.app}>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;