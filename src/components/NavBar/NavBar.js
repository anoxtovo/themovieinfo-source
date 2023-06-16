import React from 'react';

import './NavBar.css';

export default function NavBar() {
    return(
        <div className='site--header'>
            <a href='/'><h3 className='site--title'>TMIS</h3></a>
            <ul className='nav--links'>
                <li><a href='/'>Home</a></li>
                <li>
                    About
                </li>
            </ul>
        </div>
    );
}