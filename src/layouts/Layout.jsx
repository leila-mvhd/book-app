import React from 'react';

import styles from './Layout.module.css'

function Layout({children}) {
    return (
        <>
           <header>
            <h1>Book App</h1>
            <p><a href='#'>Leila movahed</a> | React.js developer</p>
            </header> 
            {children}
           <footer>Created by mvhd</footer>
        </>
    );
}

export default Layout;