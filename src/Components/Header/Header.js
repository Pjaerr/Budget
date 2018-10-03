import React from 'react';

import styles from './Header.scss';


const Header = (props) =>
{
  const { name, balance, income, outcome } = props.data;

  return (
    <div className={styles.header}>
      <h1 className={styles.name}>{name}</h1>
      <span className={styles.balance}><h1>Balance:</h1> <h1>{balance}</h1></span>
      <span className={styles.income}><h2>Income:</h2> <h2>{income}</h2></span>
      <span className={styles.outcome}><h2>Outcome:</h2> <h2>{outcome}</h2></span>
    </div>
  );
}

export default Header;
