import React, { useState } from 'react';

import {books} from '../constants/mockData'
import BookCard from './BookCard';
import SideCard from './SideCard';

import styles from './Books.module.css'

function Books() {
    const [favorite,setFavorite]=useState([]);
    const favoriteHandler =(book,status) =>{
        // setFavorite((favorite)=>[...favorite,id]);
      if(status){
        const newFavorite = favorite.filter(i => i.id !== book.id);
        setFavorite(newFavorite);
      }
      else{
        setFavorite((favorite)=> [...favorite,book]);
      }
      console.log(favorite);
    }
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
            {books.map(book => <BookCard key={book.id} data={book} favoriteHandler={favoriteHandler} ></BookCard>)}
            </div>
            {!!favorite.length && <div className={styles.favorite}>
                <h4>Favorites</h4>
                {favorite.map(book => <SideCard key={book.id} data={book}></SideCard>)}</div>}
        </div>
    );
}

export default Books;