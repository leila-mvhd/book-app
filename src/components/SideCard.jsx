import React from 'react';

import styles from './SideCard.module.css'

const SideCard = ({data:{id,title,image}}) => {
    return (
        <div className={styles.card}>
            <img src={image} />
            <p>{title}</p>
        </div>
    );
};

export default SideCard;