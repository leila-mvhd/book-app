import React, { useState } from 'react';

import {books as bookData} from '../constants/mockData'
import BookCard from './BookCard';
import SideCard from './SideCard';
import SearchBox from './SearchBox';

import styles from './Books.module.css'

function Books() {
    const [favorite,setFavorite]=useState([]);
    const [search,setSearch]=useState([]);
    const [books,setBooks]=useState(bookData);


    const favoriteHandler =(book,status) =>{
       
      if(status){
        const newFavorite = favorite.filter(i => i.id !== book.id);
        setFavorite(newFavorite);
      }
      else{
        setFavorite((favorite)=> [...favorite,book]);
      }
    }

    const searchHandler = () =>{
      if(search){
        const newBooks=books.filter(book => book.title.toLowerCase().includes(search));
        setBooks(newBooks);
      } else {
        setBooks(bookData);
      }
    }

    return (
      <>
        <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
        <div className={styles.container}>
            <div className={styles.cards}>
            {books.map(book => <BookCard key={book.id} data={book} favoriteHandler={favoriteHandler} favorite={favorite}></BookCard>)}
            </div>
            {!!favorite.length && <div className={styles.favorite}>
                <h4>Favorites</h4>
                {favorite.map(book => <SideCard key={book.id} data={book}></SideCard>)}</div>}
        </div>
      </>
    );
}

export default Books;