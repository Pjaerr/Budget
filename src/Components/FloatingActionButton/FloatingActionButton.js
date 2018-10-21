import React from 'react';

import styles from './FloatingActionButton.scss';

const FloatingActionButton = (props) =>
{
    return (
        <button className={styles.fab} onClick={props.onClick}>
            +
        </button>
    );
}

export default FloatingActionButton;
