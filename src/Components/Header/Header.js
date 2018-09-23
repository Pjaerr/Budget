import React from 'react';

import styles from './Header.scss';


const Header = (props) =>
{
  const { account, balance, income, outcome } = props.data;

  return (
    <div className={styles.Header}>
      <h1>{account}</h1>
      <h1>Balance: {balance}</h1>
      <h2>Income: {income}</h2>
      <h2>Outcome: {outcome}</h2>
    </div>
  );
}

export default Header;
