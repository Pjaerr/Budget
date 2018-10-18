import React from 'react';

import styles from './Header.scss';

import { positive, negative } from '../../utils/js/styles';
import { isNegative, toCurrency } from '../../utils/js/utils';

const renderBalance = (balance) =>
{
  let style;

  isNegative(balance) ? style = negative : style = positive;

  return <span className={styles.balance}><h1>Balance:</h1> <h1 style={style}>{toCurrency(balance, '£')}</h1></span>;
}

const renderIncome = (income) =>
{
  let style;

  isNegative(income) ? style = negative : style = positive;

  return <span className={styles.income}><h2>Income:</h2> <h2 style={style}>{toCurrency(income, '£')}</h2></span>;
}

const renderOutcome = (outcome) =>
{
  let style;

  isNegative(outcome) ? style = negative : style = positive;

  return <span className={styles.outcome}><h2>Outcome:</h2> <h2 style={style}>{toCurrency(outcome, '£')}</h2></span>;
}

const Header = (props) =>
{
  const { name, balance, income, outcome } = props.data;

  return (
    <div className={styles.header}>
      <h1 className={styles.name}>{name}</h1>
      {renderBalance(balance)}
      {renderIncome(income)}
      {renderOutcome(outcome)}
    </div>
  );
}

export default Header;
