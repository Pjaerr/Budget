import React from 'react';

import styles from './Overview.scss';


const Overview = (props) =>
{
  //Todo: Destructure specific data
  const { name, income, outcome } = props.data;

  return (
    <div className={styles.Overview}>
      <h1>Account: {name}</h1>
      <h2>Income: {income}</h2>
      <h2>Outcome: {outcome}</h2>
    </div>
  );
}

export default Overview;
