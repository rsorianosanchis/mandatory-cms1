import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=> (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div class='container'>
            <Link to='/articleslist' className='navbar-brand'>
                Sjömans loggbok
            </Link>

        </div>
    </nav>

);

export default Header;