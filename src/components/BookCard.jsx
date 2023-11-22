import React, { useState } from 'react';
import { BsHeartFill } from "react-icons/bs";
import styles from './BookCard.module.css'

const BookCard = ({data ,favoriteHandler,favorite}) => {
    const {id,title,author,language,pages,image}=data;
    const [like,setLike]=useState(false);
    
    const likeHandler= () => {
        favoriteHandler(data,like);
        setLike(like => !like);
    }

    const isFound = favorite.some(element => {
        if (element.id === id) {
          return true;
        }
    
        return false;
      });
   
    return (
        <div className={styles.card}>
            <img src={image}></img>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>{pages}pages</span>
                </div>
            </div>
            <button onClick={likeHandler}> <BsHeartFill color={isFound ? 'red' : 'white'} fontSize='1.2rem'/></button>
        </div>
    );
};

export default BookCard;