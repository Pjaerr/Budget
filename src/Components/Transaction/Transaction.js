import React from 'react';

import styles from './Transaction.scss';

import { positive, negative } from '../../utils/js/styles';
import { isNegative, toCurrency } from '../../utils/js/utils';


const renderAmount = (amount) =>
{
    let style;

    isNegative(amount) ? style = negative : style = positive;

    return <h1 className={styles.amount} style={style}>{toCurrency(amount, '£')}</h1>;
}

const Transaction = (props) =>
{
    const accountName = props.accountName;
    const { description, date, amount } = props.details;

    return (
        <div className={styles.transaction}>
            <div className={styles.topInfo}>
                {renderAmount(amount)}
                <h2 className={styles.date}>{date}</h2>
            </div>
            <h2 className={styles.description}>{description}</h2>
            <h3 className={styles.account}>Account: {accountName}</h3>
        </div>
    );
}

export default Transaction;
